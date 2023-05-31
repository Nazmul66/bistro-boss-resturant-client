import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';


const useCart = () =>{
    const { userInfo } = useContext(AuthContext)
    const token = localStorage.getItem("access_token")

    const { refetch,  data: cart = [] } = useQuery({
        queryKey: ['carts', userInfo?.email],
        queryFn: async () =>{
            const response = await fetch(`http://localhost:4000/carts?email=${userInfo?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        },
      })

      return [cart, refetch];
}

export default useCart;