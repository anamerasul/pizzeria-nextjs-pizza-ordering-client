import axios from "axios";
import Image from "next/image";

const Orders = ({ singleOrder }) => {



    return (
        <div className="container mx-auto h-full lg:h-screen">
            <h2 className=" text-3xl font-bold text-center py-10">Track Order</h2>
            <div className="flex pt-10 flex-col lg:flex-row ">
                <div className="w-11/12 lg:w-[75%] mx-auto">
                    <div className=" overflow-x-auto">
                        <table className="w-full table-auto">
                            <tbody>
                                <tr className="">
                                    <th className=" text-left pb-5">Order ID</th>
                                    <th className=" text-left pb-5">Customer</th>
                                    <th className=" text-left pb-5">Phone</th>
                                    <th className=" text-left pb-5">Address</th>
                                    <th className=" text-left pb-5">Total</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td className="text-rose-600">{singleOrder?._id}</td>
                                    <td className="text-rose-600">{singleOrder?.customerName}</td>
                                    <td className="text-rose-600">{singleOrder?.customerPhone}</td>
                                    <td className="text-rose-600">{singleOrder?.customerAddress}</td>
                                    <td className="font-bold text-rose-600"><span>$</span> {singleOrder?.total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col lg:flex-row pt-20">
                        <div className="flex flex-col items-center rounded-xl bg-teal-100 px-20 py-10 m-3">
                            <Image src="/img/paid.png" width={30} height={30} alt="" />
                            <span>Payment</span>
                            <div>
                                <Image src="/img/checked.png" width={20} height={20} alt="" />
                            </div>
                        </div>
                        <div className="flex animate-pulse lg:animate-bounce flex-col items-center rounded-xl bg-gray-300 px-20 py-10 m-3">
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
                <div className="w-5/6 my-10 lg:w-[25%] bg-gray-800 text-white mx-auto h-72 rounded-2xl">
                    <div className="w-5/6 lg:w-3/5 mx-auto">
                        <h2 className="text-center text-2xl font-bold pt-5 pb-2">Cart Total</h2>
                        <hr className=" w-40 mx-auto pb-5" />
                        <div>
                            <h4 className="text-xl pb-2">Subtotal: {singleOrder?.total}</h4>
                        </div>
                        <div>
                            <h4 className="text-xl pb-2">Discount: $0.00</h4>
                        </div>
                        <div>
                            <h4 className="text-xl pb-2">Total: {singleOrder?.total}</h4>
                        </div>
                        <button disabled className="w-full py-2 my-5 bg-rose-500 rounded ">Payment on delivery</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`https://shahriar-pizzeria.netlify.app/api/orders/${params.id}`);
    return {
        props: {
            singleOrder: res.data,
        },
    }
}

export default Orders;