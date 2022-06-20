import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        
        getGifs(category).then( newIamges => {
            setimages(newIamges)
            setIsLoading(false)
        })
        
    }, [])
    



    return {
        images,
        isLoading 
    }


}
