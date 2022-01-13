/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import OrderDetails from "../components/OrderDetails";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";



const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const router = useRouter();

    const createOrder = async (data) => {
        try {

            const res = await axios.post("https://shahriar-pizzeria.vercel.app/api/orders", data);

            if (res.status === 201) {
                dispatch(reset());
                router.push(`/orders/${res.data._id}`);
            }

        } catch (err) {
            console.log(err);
        }
    };




    const [open, setOpen] = useState(false);
    const [cashOnDelivery, setCashOnDelivery] = useState(false);

    // This values are the props in the UI
    // PAYPAL VALUES
    const amount = "2";
    const currency = "USD";
    const style = { "layout": "vertical" };



    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
        );
    }


    return (

        <div className=" min-h-screen">
            <h2 className=" text-3xl font-bold text-center py-10">My Cart</h2>
            {
                cart.products.length > 0 ?
                    <div className="flex flex-col lg:flex-row lg:h-screen  container mx-auto lg:pt-10">
                        <div className="w-11/12 lg:w-[75%] mx-auto pt-10">
                            <div className=" overflow-x-auto">
                                <table className="w-11/12 lg:w-full mx-auto table table-auto overscroll-auto ">
                                    <tbody>
                                        <tr className="">
                                            <th className=" text-left pb-5">Product</th>
                                            <th className=" text-left pb-5">Name</th>
                                            <th className=" text-left pb-5">Additionals</th>
                                            <th className=" text-left pb-5 pr-2">Price</th>
                                            <th className=" text-left pb-5">Quantity</th>
                                            <th className=" text-left pb-5">Total</th>
                                        </tr>
                                    </tbody>

                                    {
                                        cart.products.map(product => (
                                            <tbody key={product._id}>
                                                <tr >
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
                                            </tbody>
                                        ))
                                    }




                                </table>
                            </div>
                        </div>
                        <div className="w-11/12 lg:w-[25%] bg-gray-800 text-white mx-auto h-96 rounded-2xl my-10 lg:my-0">
                            <div className=" w-3/5 mx-auto">
                                <h2 className="text-center text-2xl font-bold pt-5 pb-2">Cart Total</h2>
                                <hr className=" w-40 mx-auto pb-5" />
                                <div>
                                    <h4 className="text-xl pb-2">Subtotal: <span>$</span>{cart.total} </h4>
                                </div>
                                <div>
                                    <h4 className="text-xl pb-2">Discount: $00.00</h4>
                                </div>
                                <div className=" pb-12">
                                    <h4 className="text-xl pb-2">Total: <span>$</span>{cart.total} </h4>
                                </div>

                                {
                                    open ? (
                                        <div>
                                            <h2 className="text-center text-sm">Choose a payment method:</h2>
                                            <button onClick={() => setCashOnDelivery(true)} className="w-full py-2 my-2 bg-teal-600 hover:bg-teal-700 transition duration-300 text-white font-semibold rounded ">CASH ON DELIVERY</button>
                                            {
                                                cashOnDelivery ? <div></div> : (
                                                    <div>
                                                        <PayPalScriptProvider
                                                            className="z-10"
                                                            options={{
                                                                "client-id": "test",
                                                                components: "buttons",
                                                                currency: "USD",
                                                                "disable-funding": "credit,card,p24,venmo"
                                                            }}
                                                        >
                                                            <ButtonWrapper
                                                                currency={currency}
                                                                showSpinner={false}
                                                            />
                                                        </PayPalScriptProvider>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ) : (
                                        <button onClick={() => setOpen(true)} className="w-full py-3 my-5 bg-rose-600 rounded-md ">CHECKOUT NOW</button>
                                    )
                                }
                            </div>
                        </div>
                        {
                            cashOnDelivery && (
                                <OrderDetails cashOnDelivery={cashOnDelivery} total={cart.total} createOrder={createOrder} />
                            )
                        }
                    </div> :
                    <div className="bg-rose-100 h-40 w-5/6 lg:w-1/2 mx-auto rounded-2xl">
                        <h2 className="text-xl text-rose-600 text-center font-thin pt-14">Your cart is empty</h2>
                    </div>
            }
        </div>
    );
};

export default Cart;