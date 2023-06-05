import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../CustomLoader/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import './CheckOutForm.css'

const CheckOutForm = ({ cart, price }) => {
    // console.log(price)
    const stripe = useStripe();
    const elements = useElements();
    const {userInfo} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [process, setProcess] = useState(false)
    const [transactionId, setTransactionId] = useState("")

    useEffect(() =>{
     // price shadharonto useEffect a dhukar age by default 0 dekhay so tripe payment seta 0 hisebe count hoye thake tai atake error theke bachar jonno apnake price ta gater then use korte hobe then problem solve

       if(price > 0){
        axiosSecure.post('/create-payment-intent', {price})
        .then(data =>{
            // console.log(data.data.clientSecret)
            setClientSecret(data.data.clientSecret)
        })
       }
    },[price, axiosSecure])

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return;
        }

        const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if(error){
            console.log("error", error)
            setCardError(error.message)
        }
        else{
            setCardError("")
        }

        setProcess(true)
        // confirm payment card
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: userInfo?.email || "Anonymous@gmail.com",
                  name: userInfo?.displayName || "Unknown Name"
                },
              },
            },
          );

          if(confirmError){
              console.log("problem error", confirmError)
          }
          else{
            console.log("payment Intent)", paymentIntent)
            setProcess(false)
            if(paymentIntent.status === 'succeeded'){
                setTransactionId(paymentIntent.id)
                // save payment information to the server
                const payment = {
                    email: userInfo?.email,
                    transactionId: paymentIntent.id,
                    price,
                    date: new Date(),
                    quantity: cart.length,
                    status: "service pending",
                    cartItems: cart.map(item => item._id),
                    menuItems: cart.map(item => item.menuId),
                    itemNames: cart.map(item => item.name)
                }
                
                axiosSecure.post("/payments", payment)
                .then(data =>{
                    console.log(data)
                    if(data.data.insertedId){
                       //display confirm
                    }
                })
            }
          }

    }


    return (
             <>
               <form className="max-w-[60%] mx-auto" onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                        style: {
                            base: {
                            fontSize: '18px',
                            color: '#000',
                            '::placeholder': {
                                color: '#A1A1A1',
                            },
                            },
                            invalid: {
                            color: '#9e2146',
                            },
                        },
                        }}
                    />
                    <div className="text-center mt-8">
                       <button type="submit" className="btn-dash" disabled={!stripe || !clientSecret || process}> Pay </button>
                    </div>
                </form>

                {cardError && <><h4 className="text-red-600 text-center font-semibold mt-10 text-xl">{cardError}</h4>
                </>}
                {transactionId && <><p className="text-green-600 text-center font-semibold mt-10 text-xl">Transaction Complete with TransactionId: {transactionId}</p>
                </>}
                
             </>
    );
};

export default CheckOutForm;