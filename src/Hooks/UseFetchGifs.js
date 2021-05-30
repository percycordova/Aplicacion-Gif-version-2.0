
import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGif'
export const UseFetchGifs = (category,quantity) => {
    const [state, setstate] = useState({
        data: [],
        loading: true,

    });

    useEffect(() => {

        getGif(category,quantity)
        .then(imgs=>{
              setstate({
                data: imgs,
                loading: false,
              });
             
        });


    }, [category,quantity])

    return state; //{data:[], loading:true}
}


