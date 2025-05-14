import React from "react";
import {Carousel} from 'react-responsive-carousel'
import {img} from './data'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import Headset from '../../assets/images/items/Headset.jpg'
import Chair from '../../assets/images/items/Chair.jpg'
import Keyboards from '../../assets/images/items/Keyboard.jpg'
import Mouse from '../../assets/images/items/Mouse.jpg'


import "./menuBanner.css";
// import ProductDetails from "../ProductDetails/ProductDetails";

const MenuBanner = () => {
  return (
    <>
        <Carousel className="homeBanner" autoPlay={true}
        infiniteLoop = {true}
        showIndicators = {false}
        showThumbs = {false}>
            
{
    img.map((imageItem) => {
        return <img className="homeBannerImg" src={imageItem} />
    })
}
        </Carousel>
      {/* <div className="homeBannerImg"></div> */}

       <div className="homeProduct">
          <div className="itemCard">
            <div className="itemCardTitle">Title</div>
            <div className="itemImage">
              <div className="imgList">
                <img className="imgBanner" src={Headset} alt="" />
                <div className="imageName">Headsets</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Keyboards} alt="" />
                <div className="imageName">Keyboards</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Mouse} alt="" />
                <div className="imageName">Computer mice</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Chair} alt="" />
                <div className="imageName">Chairs</div>
              </div>
            </div>
            <div className="seeMore">See More</div>
          </div>

          <div className="itemCard">
            <div className="itemCardTitle">Title</div>
            <div className="itemImage">
              <div className="imgList">
                <img className="imgBanner" src={Headset} alt="" />
                <div className="imageName">Headsets</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Keyboards} alt="" />
                <div className="imageName">Keyboards</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Mouse} alt="" />
                <div className="imageName">Computer mice</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Chair} alt="" />
                <div className="imageName">Chairs</div>
              </div>
            </div>
            <div className="seeMore">See More</div>
          </div>

          <div className="itemCard">
            <div className="itemCardTitle">Title</div>
            <div className="itemImage">
              <div className="imgList">
                <img className="imgBanner" src={Headset} alt="" />
                <div className="imageName">Headsets</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Keyboards} alt="" />
                <div className="imageName">Keyboards</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Mouse} alt="" />
                <div className="imageName">Computer mice</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Chair} alt="" />
                <div className="imageName">Chairs</div>
              </div>
            </div>
            <div className="seeMore">See More</div>
          </div>

          <div className="itemCard">
            <div className="itemCardTitle">Title</div>
            <div className="itemImage">
              <div className="imgList">
                <img className="imgBanner" src={Headset} alt="" />
                <div className="imageName">Headsets</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Keyboards} alt="" />
                <div className="imageName">Keyboards</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Mouse} alt="" />
                <div className="imageName">Computer mice</div>
              </div>

              <div className="imgList">
                <img className="imgBanner" src={Chair} alt="" />
                <div className="imageName">Chairs</div>
              </div>
            </div>
            <div className="seeMore">See More</div>
          </div>
        </div>

    </>
  );
};

export default MenuBanner;





