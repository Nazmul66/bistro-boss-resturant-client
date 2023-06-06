import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { userInfo } = useContext(AuthContext)
    const [ axiosSecure ] = useAxiosSecure();

    // const token = localStorage.getItem("access_token")

    const {data: isAdmin = [], isAdminLoading } = useQuery({
        queryKey: ['isAdmin', userInfo?.email],
        enabled: !!userInfo?.email && !!localStorage.getItem("access_token"),
        // queryFn: async () =>{
        //     const res = await fetch(`http://localhost:4000/users/admin/${userInfo?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },

        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/admin/${userInfo?.email}`)
            // console.log("res from data", res)
            return res.data.admin;
        },
      })

      return [isAdmin, isAdminLoading];
};

export default useAdmin;