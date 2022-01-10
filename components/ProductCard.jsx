import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <div>
            <div className=" cursor-pointer">
                <Link href={`/product/${product._id}`} passHref>
                    <Image src={product.img} alt="" width={300} height={300} />
                </Link>
            </div>
            <h2 className="text-2xl font-bold text-rose-600 py-3"> {product.title} </h2>
            <h3 className="text-2xl font-bold">$ {product.prices[0]} </h3>
            <p className="py-3"> {product.desc} </p>
            <Link href={`/product/${product._id}`} passHref>
                <button className="px-10 py-3 my-5 rounded-full bg-rose-600 text-white">Order This</button>
            </Link>
        </div>
    );
};

export default ProductCard;