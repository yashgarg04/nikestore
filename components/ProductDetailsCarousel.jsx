"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <img src="/p2.png" alt="img1" />
                <img src="/p3.png" alt="img2" />
                <img src="/p4.png" alt="img3" />
                <img src="/p5.png" alt="img4" />
                <img src="/p6.png" alt="img5" />
                <img src="/p7.png" alt="img6" />
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;