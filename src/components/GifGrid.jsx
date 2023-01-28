import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "../components"

export function GifGrid({ category }) {

    const { images, isLoading } = useFetchGifs(category)


    return (
        <>
            <h2>{category}</h2>
            {
                isLoading && <h4>Cargando...</h4>
            }
            
            <div className="card-grid">
                {images.map((image) => {
                    return (
                        <GifItem key={image.id} {...image} />
                    )
                })}
            </div>

        </>
    )
}
