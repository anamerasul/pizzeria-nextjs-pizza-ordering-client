
const Footer = () => {
    return (
        <div className=" bg-slate-900 text-white text-center w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center w-4/6 mx-auto pt-10">
                <div>Column 1</div>
                <div>Column 2</div>
                <div>Column 3</div>
                <div>Column 4</div>
            </div>
            <p className="pt-20 pb-5"> <small className="text-gray-400">© Copyright Protected | Pizzeria</small> </p>
        </div>
    );
};

export default Footer;