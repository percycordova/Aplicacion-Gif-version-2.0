import { UseFetchGifs } from '../Hooks/UseFetchGifs'
//import { getGif } from '../helpers/getGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category,quantity }) => {


    const { data:images,loading } = UseFetchGifs(category,quantity);
    return (
        < div className="contenedor-card" >
            
            <h3 >{category}</h3>
            {loading&&<p>Loading</p>}

            {  <ul className="card-grid">
                {

                    images.map(img =>
                    (
                        <GifGridItem
                            key={img.id}
                            {...img} //paso el objeto como parametro
                        />
                    )
                    )

                }
            </ul>}
        </div>
    )
}
