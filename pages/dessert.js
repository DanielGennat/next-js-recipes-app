import Image from "next/image";

export default function Dessert() {

    return (
        <>
        <h2>Dessert</h2>
        <Image 
            alt=""
            src="https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-1.2.1"
            layout="responsive"
            width={2400}
            height={1599}/>
        <p>This is some dummy content for the Dessert page.</p>
        <p>This could be your favorite page!</p>
        </>
    )
}