import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ singleProduct }) => {

    const [price, setPrice] = useState(singleProduct.prices[0]);
    const [size, setSize] = useState(0);
    const [additionals, setAdditional] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const changePrice = (number) => {
        setPrice(price + number)
    }

    const handleSize = (sizeIndex) => {
        const priceDifference = singleProduct.prices[sizeIndex] - singleProduct.prices[size];
        setSize(sizeIndex);
        changePrice(priceDifference);
    }



    const handleOptionChange = (e, option) => {
        const checked = e.target.checked;

        if (checked) {
            changePrice(option.price);
            setAdditional(prev => [...prev, option]);
        } else {
            changePrice(-option.price);
            setAdditional(additionals.filter(additional => additional._id !== option._id));
        }
    };

    const handleAddToCart = () => {
        dispatch(addProduct({ ...singleProduct, additionals, price, quantity }));
    };


    return (
        <div className="flex flex-col lg:flex-row container mx-auto w-11/12 pt-10 lg:pt-20 min-h-screen">
            <div className=" w-5/6 mx-auto lg:w-[50%] pb-10 ">
                <Image className="" src={singleProduct.img} width={500} height={500} alt="" />
            </div>
            <div className=" w-5/6 mx-auto lg:w-[50%]">
                <h2 className=" text-3xl font-bold"> {singleProduct.title} </h2>
                <h3 className="py-5 text-4xl text-rose-600 font-bold"> <span>$</span>{price} </h3>
                <p className="py-5"> {singleProduct.desc} </p>
                <h3 className="text-xl font-bold pb-5">Choose your pizza size:</h3>
                <div className="flex items-center flex-row">
                    <div onClick={() => handleSize(0)} className=" px-2 md:px-5  text-center bg-gray-100 hover:bg-rose-100 transition duration-300 h-36 m-2 rounded-md py-2 cursor-pointer">
                        <Image className="" src={singleProduct.img} width={60} height={60} alt="" />
                        <h4>Small</h4>
                    </div>
                    <div onClick={() => handleSize(1)} className="px-2 md:px-5 text-center bg-gray-100 hover:bg-rose-100 transition duration-300 h-36 m-2 rounded-md py-2 cursor-pointer">
                        <Image className="" src={singleProduct.img} width={80} height={80} alt="" />
                        <h4>Medium</h4>
                    </div>
                    <div onClick={() => handleSize(2)} className="px-2 md:px-5 text-center bg-gray-100 hover:bg-rose-100 transition duration-300 h-36 m-2 rounded-md py-2 cursor-pointer">
                        <Image className="" src={singleProduct.img} width={90} height={90} alt="" />
                        <h4>Large</h4>
                    </div>
                </div>
                <h3 className="py-5 text-xl font-bold">Choose additional ingredients:</h3>
                <div className="flex flex-col lg:flex-row">

                    {
                        singleProduct.extraOptions.map(option => (
                            <div key={option._id} className="flex items-center">
                                <input className="checkbox checkbox-accent checkbox-md my-2" type="checkbox" name={option.text} id={option.text} onChange={(e) => handleOptionChange(e, option)} />
                                <label className="px-2 mr-4" htmlFor="double">{option.text} <span className="badge badge-outline"> <span>+ $</span>{option.price} </span> </label>
                            </div>
                        ))
                    }



                </div>
                <div className="py-10 flex items-center">
                    <input onChange={(e) => setQuantity(e.target.value)} className=" border-2 h-10 w-20 px-2 rounded-md mr-3 text-2xl" type="number" defaultValue={1} />

                    <button onClick={handleAddToCart} className="px-7 py-2 bg-rose-600 rounded-md text-white">Add to cart</button>
                </div>
            </div>
        </div>
    );
};


export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
        props: {
            singleProduct: res.data,
        },
    }
}


export default Product;