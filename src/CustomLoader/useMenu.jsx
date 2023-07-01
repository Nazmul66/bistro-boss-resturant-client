import { useQuery } from "@tanstack/react-query";

const useMenu = () =>{
    // const [menu, setMenu] = useState([]);

    // useEffect(() =>{
    //     fetch("http://localhost:4000/menu")
    //     .then(res => res.json())
    //     .then(data => setMenu(data))
    // },[])

    const {data: menu = [], refetch, isLoading: loading} = useQuery({
        queryKey: ["menu"],
        queryFn: async() =>{
            const res = await fetch("https://weak-jade-pigeon-vest.cyclic.app/menu")
            return res.json();
        }
    })

    return [menu, refetch, loading];
}

export default useMenu;