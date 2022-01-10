import Image from "next/image";
import { useState } from "react";

const Product = () => {

    const [size, setSize] = useState(0);

    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "PIZZA ROZARIO",
        price: [100, 200, 300],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem ea ipsum quod labore saepe consectetur aut aspernatur! Voluptatem doloremque temporibus ut, dolor iusto recusandae porro? Amet illum necessitatibus molestias corrupti quod architecto atque fugit illo repellendus officia nobis fuga.",
    };



    return (
        <div className="flex flex-col lg:flex-row container mx-auto w-5/6 pt-10 lg:pt-20">
            <div className=" w-5/6 mx-auto lg:w-[50%] pb-10 ">
                <Image className="" src={pizza.img} width={500} height={500} alt="" />
            </div>
            <div className=" w-5/6 mx-auto lg:w-[50%]">
                <h2 className=" text-3xl font-bold"> {pizza.name} </h2>
                <h3 className="py-5 text-4xl text-rose-600 font-bold">$ {pizza.price[size]} </h3>
                <p className="py-5"> {pizza.desc} </p>
                <h3 className="text-xl font-bold pb-5">Choose your pizza size:</h3>
                <div className="flex items-center flex-col lg:flex-row">
                    <div onClick={() => setSize(0)} className="px-5  text-center bg-gray-100 hover:bg-rose-100 transition duration-300 h-36 m-2 rounded-md py-2 cursor-pointer">
                        <Image className="" src={pizza.img} width={60} height={60} alt="" />
                        <h4>Small</h4>
                    </div>
                    <div onClick={() => setSize(1)} className="px-5 text-center bg-gray-100 hover:bg-rose-100 transition duration-300 h-36 m-2 rounded-md py-2 cursor-pointer">
                        <Image className="" src={pizza.img} width={80} height={80} alt="" />
                        <h4>Medium</h4>
                    </div>
                    <div onClick={() => setSize(2)} className="px-5 text-center bg-gray-100 hover:bg-rose-100 transition duration-300 h-36 m-2 rounded-md py-2 cursor-pointer">
                        <Image className="" src={pizza.img} width={90} height={90} alt="" />
                        <h4>Large</h4>
                    </div>
                </div>
                <h3 className="py-5 text-xl font-bold">Choose additional ingredients:</h3>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex items-center">
                        <input className="w-4 h-4" type="checkbox" name="double" id="double" />
                        <label className="px-2 mr-4" htmlFor="double">Double ingredients</label>
                    </div>
                    <div className="flex items-center">
                        <input className="w-4 h-4" type="checkbox" name="cheese" id="cheese" />
                        <label className="px-2 mr-4" htmlFor="cheese">Extra cheese</label>
                    </div>
                    <div className="flex items-center">
                        <input className="w-4 h-4" type="checkbox" name="spicy" id="spicy" />
                        <label className="px-2 mr-4" htmlFor="spicy">Spicy sauce</label>
                    </div>
                    <div className="flex items-center">
                        <input className="w-4 h-4" type="checkbox" name="garlic" id="garlic" />
                        <label className="px-2 mr-4" htmlFor="garlic">Garlic sauce</label>
                    </div>
                </div>
                <div className="py-10 flex items-center">
                    <input className=" border-2 h-10 w-20 px-2 rounded-md mr-3 text-2xl" type="number" defaultValue={1} />
                    <button className="px-7 py-2 bg-rose-600 rounded-md text-white">Add to cart</button>
                </div>
            </div>
        </div>
    );
};



export default Product;