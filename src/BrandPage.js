import React from "react";
import MyNav from "./MyNav";
import './brand.css'
function BrandPage() {
    return (
        <>
            <div>
                <MyNav />
                <main className="hero">
                    <div className="hero-content">
                        <h1>YOUR FEET DESERVE THE BEST</h1>
                        <p>YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.</p>
                        <div className="btn-hero">
                            <button >Shop Now</button>
                            <button className="secondary-btn">Category</button>
                        </div>
                        <div className="shopping">
                            <p>Also Abailable on</p>
                        </div>
                        <div className="brand-icon">
                            <img src="/images/amazon.png" alt="amazon brand" />
                            <img src="/images/flipkart.png" alt="amazon brand" />

                        </div>
                    </div>
                    <div className="hero-image">
                    <img src="/images/shoe_image.png" alt="amazon brand" />

                    </div>
                </main>
            </div>
        </>
    );
}

export default BrandPage;