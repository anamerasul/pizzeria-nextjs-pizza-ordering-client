import ProductCard from "./ProductCard";


const ProductList = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <h2 className="text-2xl font-bold py-5">Best Pizza in town</h2>
                <p className="pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus facere a magni. Possimus voluptate repudiandae officia ex odit, optio facilis. Enim quibusdam aliquid unde!</p>
            </div>
            <div className="grid grid-cols-4 gap-5 text-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default ProductList;