import ProductCard from "./ProductCard";


const ProductList = ({ productList }) => {
    return (
        <div className="container mx-auto min-h-screen">
            <div className="text-center">
                <h2 className="text-4xl font-bold pt-10 pb-5">Out Toplist Pizzas</h2>
                <p className="pb-16 w-5/6 lg:w-1/2 mx-auto">Try our exclusive pizza, It tastes like bread tomato and cheese, chewy, moist, slightly acidic, and sharp. Then once you apply toppings, that changes it.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
                {productList.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}


            </div>
        </div>
    );
};

export default ProductList;