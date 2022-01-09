import Image from "next/image";

const Orders = () => {
    return (
        <div className="container mx-auto h-screen">
            <h2 className=" text-3xl font-bold text-center py-10">My Orders</h2>
            <div className="flex pt-10">
                <div className="flex-[3]">
                    <div>
                        <table className="w-full table-auto">
                            <tr className="">
                                <th className=" text-left pb-5">Order ID</th>
                                <th className=" text-left pb-5">Customer</th>
                                <th className=" text-left pb-5">Address</th>
                                <th className=" text-left pb-5">Total</th>
                            </tr>
                            <tr>
                                <td className="text-rose-600">2568741694255</td>
                                <td className="text-rose-600">John Doe</td>
                                <td className="text-rose-600">Uttar Badda, Dhaka, Bangladesh</td>
                                <td className="font-bold text-rose-600"> $200 </td>
                            </tr>
                        </table>
                    </div>
                    <div className="flex pt-20">
                        <div className="flex flex-col items-center rounded-xl bg-teal-100 px-20 py-10 m-3">
                            <Image src="/img/paid.png" width={30} height={30} alt="" />
                            <span>Payment</span>
                            <div>
                                <Image src="/img/checked.png" width={20} height={20} alt="" />
                            </div>
                        </div>
                        <div className="flex animate-bounce flex-col items-center rounded-xl bg-gray-100 px-20 py-10 m-3">
                            <Image src="/img/bake.png" width={30} height={30} alt="" />
                            <span>Preparing</span>
                            <div className="hidden">
                                <Image src="/img/checked.png" width={20} height={20} alt="" />
                            </div>
                        </div>
                        <div className="flex opacity-50 flex-col items-center rounded-xl bg-gray-100 px-20 py-10 m-3">
                            <Image src="/img/bike.png" width={30} height={30} alt="" />
                            <span>On the way</span>
                            <div className="hidden">
                                <Image src="/img/checked.png" width={20} height={20} alt="" />
                            </div>
                        </div>
                        <div className="flex opacity-50 flex-col items-center rounded-xl bg-gray-100 px-20 py-10 m-3">
                            <Image src="/img/delivered.png" width={30} height={30} alt="" />
                            <span>Delivered</span>
                            <div className="hidden">
                                <Image src="/img/checked.png" width={20} height={20} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-[1] bg-gray-800 text-white mx-auto h-72 rounded-2xl">
                    <div className=" w-3/5 mx-auto">
                        <h2 className="text-center text-2xl font-bold pt-5 pb-2">Cart Total</h2>
                        <hr className=" w-40 mx-auto pb-5" />
                        <div>
                            <h4 className="text-xl pb-2">Subtotal: $200.00</h4>
                        </div>
                        <div>
                            <h4 className="text-xl pb-2">Discount: $00.00</h4>
                        </div>
                        <div>
                            <h4 className="text-xl pb-2">Total: $200.00</h4>
                        </div>
                        <button disabled className=" px-24 py-3 my-5 bg-teal-500 rounded ">PAID</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;