import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);


    return (

        <div>
            <h2 className=" text-3xl font-bold text-center py-10">My Cart</h2>
            <div className="flex flex-col lg:flex-row lg:h-screen  container mx-auto lg:pt-10">
                <div className="w-11/12 lg:w-[75%] mx-auto pt-10">
                    <div className=" overflow-x-auto">
                        <table className="w-11/12 lg:w-full mx-auto table table-auto overscroll-auto ">
                            <tr className="">
                                <th className=" text-left pb-5">Product</th>
                                <th className=" text-left pb-5">Name</th>
                                <th className=" text-left pb-5">Additionals</th>
                                <th className=" text-left pb-5 pr-2">Price</th>
                                <th className=" text-left pb-5">Quantity</th>
                                <th className=" text-left pb-5">Total</th>
                            </tr>

                            {
                                cart.products.map(product => (
                                    <tr key={product._id}>
                                        <td>
                                            <div className=" relative w-20 h-20">
                                                <Image src={product.img} layout="fill" objectFit="cover" alt="" />
                                            </div>
                                        </td>
                                        <td className="text-rose-600 font-bold"> {product.title} </td>
                                        <td className="text-rose-600">
                                            {product.additionals.map(additional => (
                                                <span className="badge badge-accent mx-1" key={additional._id}> {additional.text} </span>
                                            ))}
                                        </td>
                                        <td className="text-rose-600"> {product.price} </td>
                                        <td className="text-rose-600"> {product.quantity} </td>
                                        <td className="font-bold text-rose-600"> {product.price * product.quantity} </td>
                                    </tr>
                                ))
                            }




                        </table>
                    </div>
                </div>
                <div className="w-11/12 lg:w-[25%] bg-gray-800 text-white mx-auto h-72 rounded-2xl my-10 lg:my-0">
                    <div className=" w-3/5 mx-auto">
                        <h2 className="text-center text-2xl font-bold pt-5 pb-2">Cart Total</h2>
                        <hr className=" w-40 mx-auto pb-5" />
                        <div>
                            <h4 className="text-xl pb-2">Subtotal: <span>$</span>{cart.total} </h4>
                        </div>
                        <div>
                            <h4 className="text-xl pb-2">Discount: $00.00</h4>
                        </div>
                        <div>
                            <h4 className="text-xl pb-2">Total: <span>$</span>{cart.total} </h4>
                        </div>
                        <button className="px-7 lg:px-12 py-3 my-5 bg-rose-600 rounded ">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;