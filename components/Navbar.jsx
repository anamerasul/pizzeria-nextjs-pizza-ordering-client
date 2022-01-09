import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="h-[80px] px-[50px] bg-rose-600 flex justify-between items-center sticky top-0 z-50">
            <div className="flex text-white">
                <Image className=" rounded-full" src="/img/call.png" width="32" height="32" alt="" />
                <div>
                    <h3>Order Now</h3>
                    <h3>+880 1775 049464</h3>
                </div>
            </div>
            <div className="">
                <ul className="flex text-white">
                    <li className="px-2">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link href="/product/45">
                            <a>Products</a>
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link href="/cart">
                            <a>Cart</a>
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link href="/orders/45">
                            <a>Orders</a>
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link href="/">
                            <a>Contact</a>
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="">
                <Image className=" rounded-full"
                    src="/img/cart.png"
                    width="32"
                    height="32"
                    alt="" />
                <div className=" 
                absolute 
                top-4
                right-10
                bg-white
                w-5 h-5 font-bold 
                text-rose-600
                rounded-full
                flex items-center
                justify-center">
                    2
                </div>
            </div>
        </div>
    );
};

export default Navbar;