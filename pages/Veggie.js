import Image from "next/image";
import pizzaImg from '../public/pizza.jpg'

export default function Veggie() {

    return (
        <>
        <h2>Veggie</h2>
        <Image 
           alt=""
           src={pizzaImg}
           layout="responsive"
           width={2400}
           height={1596}/>
        <p>This is some dummy content for the Veggie page.</p>
        </>
    )
}