import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () =>{
    const { userInfo } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    // const token = localStorage.getItem("access_token")

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', userInfo?.email],
        // enabled jeta  loading ar bodole 2ta bolean value pass kora hoyese jate 2ta true thakle loading related problem na hoy.
        enabled: !!userInfo?.email && !!localStorage.getItem("access_token") ,
        // queryFn: async () =>{
        //     const res = await fetch(`http://localhost:4000/carts?email=${userInfo?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },

        queryFn: async () =>{
            const res = await axiosSecure.get(`/carts?email=${userInfo?.email}`)
            // console.log("res from axios", res.data)
            return res.data;
        },
      })

      return [cart, refetch];
}

export default useCart;