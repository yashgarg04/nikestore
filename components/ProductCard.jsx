import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {

    const modifyNameToPath = (name) => {
      const nameStrings = name?.split(' ')
      let strings = nameStrings?.map(it => it.toLowerCase())
      return strings?.join('-')
    }

    return (
        <Link
            href={`/product/${modifyNameToPath(data.title)}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src={data.thumbnailImg}
                alt="product image"
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{data.title}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{data.price}
                    </p>

                            <p className="text-base  font-medium line-through">
                                &#8377;{data.originalPrice}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    data.originalPrice,
                                    data.price
                                )}
                                % off
                            </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;