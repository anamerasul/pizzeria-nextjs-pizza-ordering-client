import { useState } from "react";


const OrderDetails = ({ total, createOrder }) => {



    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");

    const handlePlaceOrder = () => {
        console.log(customerName, customerAddress, customerPhone, total);
        createOrder({ customerName, customerAddress, customerPhone, total, paymentMethod: 0 });

    }




    return (
        <div className=" z-20 w-full h-full absolute top-0 left-0 flex items-center justify-center bg-[rgba(197,197,197,0.56)]">
            <div className=" transition duration-500 w-5/6 lg:w-1/3 text-white bg-rose-500 z-[500] opacity-100 rounded-2xl px-10 py-10 mt-10 flex flex-col items-center justify-center">
                <h2 className="text-3xl pb-10"> You will pay <span className="font-bold"> <span>$</span>{total} </span>  after delivery </h2>
                <div className="flex flex-col w-5/6 mx-auto  ">
                    <label htmlFor="">Name:</label>
                    <input className="bg-rose-50 text-rose-600 font-semibold outline-none p-2 rounded-md mt-1" onChange={(e) => setCustomerName(e.target.value)} type="text" name="" id="" placeholder="John Doe" />
                </div>
                <div className="flex flex-col pt-3 w-5/6 mx-auto">
                    <label htmlFor="">Phone:</label>
                    <input className="bg-rose-50 text-rose-600 font-semibold outline-none p-2 rounded-md mt-1" onChange={(e) => setCustomerPhone(e.target.value)} type="phone" name="" id="" placeholder="+880" />
                </div>
                <div className="flex flex-col pt-3 w-5/6 mx-auto">
                    <label htmlFor="">Address:</label>
                    <textarea className="bg-rose-50 text-rose-600 font-semibold outline-none p-2 rounded-md mt-1" onChange={(e) => setCustomerAddress(e.target.value)} type="text" name="" id="" placeholder="Address" />
                </div>
                <div className="flex flex-col">
                    <button onClick={handlePlaceOrder} className="bg-white px-10 rounded-md text-rose-600 font-semibold mt-20 py-2">Place Order</button>

                </div>
            </div>

        </div>
    );
};

export default OrderDetails;