import { Products } from "@/utils/mock"
import ProductCard from "@/components/ProductCard"
import Image, { StaticImageData } from 'next/image'

const AllProducts = () => {

    return (

        <div className='flex  justify-evenly flex-wrap mt-16 py-10'>

            {Products.map((product) => (
                <ProductCard key={product.id} title={product.name} price={product.price} img={product.image} category={product.category} id={product.id} />

            ))}

        </div>
    )
}

export default AllProducts