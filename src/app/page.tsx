import Image from 'next/image'
import Header from "@/components/Header"
import Hero from '@/view/Hero'
import ProductList from '@/view/Productlist'
export default function Home() {
  return (

    <div>

      <Hero />
      <ProductList />
    </div>


  )
}
