import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);


    return (
        <div className="h-[80px] px-[50px] w-full bg-rose-600 flex justify-between items-center sticky top-0 z-50">
            <div className="flex text-white">
                <Image className=" rounded-full" src="/img/call.png" width="32" height="32" alt="" />
                <div>
                    <h3>Order Now</h3>
                    <h3>+880 1775 049464</h3>
                </div>
            </div>
            <div className="hidden lg:block">
                <ul className="flex text-white">
                    <li className="px-2">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>


                </ul>
            </div>
            <div className="cursor-pointer">
                <Link href="/cart" passHref>
                    <div>
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
                            {quantity}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;