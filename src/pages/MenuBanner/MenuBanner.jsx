import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./menuBanner.css";
import product from "../product.json";

const MenuBanner = () => {
    // Helper function to determine the CSS class for the image grid container
    const getImageContainerClass = (imageCount) => {
        if (imageCount === 1) {
            return "itemImage--single"; // Class for a single full-width image
        }
        // UPDATED: Check for 3 images instead of 5
        if (imageCount === 3) {
            return "itemImage--featured3"; // Class for the 1-big, 2-small layout
        }
        // Default class for 2 or 4 images (2x2 grid)
        return "itemImage--grid";
    };

    return (
        <>
            <Carousel
                className="homeBanner"
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
            >
                {img.map((imageItem, index) => (
                    <div key={index} className="imageContainer">
                        <img className="homeBannerImg" src={imageItem} alt={`Slide ${index + 1}`} />
                        <div className="blurOverlay" />
                    </div>
                ))}
            </Carousel>

            <div className="homeProduct">
                {product.product.map((item, index) => {
                    const imageCount = item.imgs.length;
                    const containerClass = getImageContainerClass(imageCount);

                    return (
                        <div key={index} className="itemCard">
                            <div className="itemCardTitle">{item.itemTitle}</div>
                            
                            <div className={`itemImage ${containerClass}`}>
                                {item.imgs.map((it, ind) => {
                                    // UPDATED: Check for 3 images instead of 5
                                    const isFeaturedItem = imageCount === 3 && ind === 0;

                                    return (
                                        <div 
                                            key={ind}
                                            className={`imgList ${isFeaturedItem ? 'imgList--featured' : ''}`}
                                        >
                                            <img className="imgBanner" src={it.url} alt={it.productName} />
                                            <div className="imageName">{it.productName}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="seeMore">See More</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default MenuBanner;