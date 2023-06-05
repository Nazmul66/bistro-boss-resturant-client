import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../CustomLoader/useCart";

const stripePromise  = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHER_KEY)

const PaymentCard = () => {
    const [cart] = useCart();

    const total = cart.reduce( (sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2));
    // console.log(price)

    return (
        <div className="py-[220px]">
            <div>
               <h2 className='text-center text-[#141414] text-[40px] font-medium mb-10'>payment</h2>
               <Elements stripe={stripePromise}>
                   <CheckOutForm cart={cart} price={price}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentCard;