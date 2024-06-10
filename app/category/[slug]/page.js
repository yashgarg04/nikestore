import React from 'react'
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { products } from '@/data';

function convertToTitleCase(str) {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// function filterByKeyValue(array, key, value) {
//     return array.filter(item => item[key] === value);
// }

function filterByName(array, value) {
    return array.filter(item => item.category?.includes(value));
}

const Category = ({ params }) => {

    const convertedString = convertToTitleCase(params.slug);

    const filteredProducts = filterByName(products, params.slug);

    return (
        <div className="w-full md:py-20 relative">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {convertedString}
                    </div>
                </div>

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
                {/* products grid end */}

            </Wrapper>
        </div>
    )
}

export default Category;