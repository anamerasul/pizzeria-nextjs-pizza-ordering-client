import Image from "next/image";

const ProductCard = () => {
    return (
        <div>
            <Image src="/img/pizza.png" alt="" width={300} height={300} />
            <h2 className="text-2xl font-bold text-rose-600 py-3">Pizza Item Title</h2>
            <h3 className="text-2xl font-bold">$150</h3>
            <p className="py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, voluptatibus.</p>
            <button className="px-7 py-2 my-5 rounded-full bg-rose-600 text-white">Order Now</button>
        </div>
    );
};

export default ProductCard;