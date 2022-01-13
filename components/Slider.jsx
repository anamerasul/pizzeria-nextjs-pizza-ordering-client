import Image from "next/image";
import banner from "../public/img/banner.png"

const Slider = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }} className=" min-h-[80vh] bg-gray-800">
            <div className="container mx-auto">
                <div className="flex w-5/6 mx-auto lg:pt-32 flex-col lg:flex-row items-center justify-center">
                    <div className="lg:w-[70%] mx-auto">
                        <h2 className="text-6xl lg:text-7xl font-bold py-10 text-white">Best <span className="text-rose-500">Pizza</span> In Town</h2>
                        <p className="text-white">Enjoy the premium tase in every bite.</p>
                        <button className="rounded-md px-10 py-3 bg-rose-500 text-white my-5">Order Now</button>
                    </div>

                    <div className="lg:w-[60%] mx-auto py-12 lg:pt-10">
                        <Image src="/img/pizzaSlider.png" width="617" height="357" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;