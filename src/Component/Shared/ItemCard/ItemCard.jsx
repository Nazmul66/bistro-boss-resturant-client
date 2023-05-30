import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../CustomLoader/useCart';

const ItemCard = ({ items }) => {
    const {image, name, price, recipe, _id} = items;
    const { userInfo } = useContext(AuthContext)
    const [ refetch ] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleOrderFood = (items) =>{
        if(userInfo){
            const cartItem = { menuId: _id, name, image, price, email: userInfo?.email}
            fetch("http://localhost:4000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Item food added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login then order the food?',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now !'
              }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', { state: { from: location }})
                }
              })
        }
    }


    return (
        <div className=''>
            <img src={image} alt="" className='w-full' />
            <div className='bg-[#f3f3f3] p-7'>
                <h3 className='mt-8 font-semibold text-[24px] text-[##151515] text-center mb-2'>{name}</h3>
                <p className='text-[#737373] text-[16px]'>{recipe}</p>
                <div className='text-center mt-8 mb-5'>
                   <button onClick={() => handleOrderFood(items)} className='px-6 py-[10px] rounded-md transition-all bg-[#e8e8e8] hover:bg-[#111827] text-[#BB8506] text-[16px] font-medium border-b-[2px] border-[#BB8506]'>ADD TO CARD</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;