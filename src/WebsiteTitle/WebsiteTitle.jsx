import { useEffect } from "react";

const ChangeTitle = (title) =>{
    useEffect(() =>{
        document.title = `Bistro-Boss | ${title}`
    },[])
}

export default ChangeTitle;