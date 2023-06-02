import { useState } from "react";
import styled from "styled-components";
import nextIcon from "../../../assets/icon-next.svg";
import previousIcon from "../../../assets/icon-previous.svg";
import product1 from "../../../assets/image-product-1.jpg";
import product2 from "../../../assets/image-product-2.jpg";
import product3 from "../../../assets/image-product-3.jpg";
import product4 from "../../../assets/image-product-4.jpg";

//mini photos fot desktop
import mini1 from "../../../assets/image-product-1-thumbnail.jpg";
import mini2 from "../../../assets/image-product-2-thumbnail.jpg";
import mini3 from "../../../assets/image-product-3-thumbnail.jpg";
import mini4 from "../../../assets/image-product-3-thumbnail.jpg";

import xIcon from "../../../assets/icon-close.svg";

interface SliderProps {
  openImg: boolean;
  setOpenImg: (openImg: boolean) => void;
}

const Slider = ({ openImg, setOpenImg }: SliderProps): JSX.Element => {
  const photoArray = [product1, product2, product3, product4];
  const [photo, setPhoto] = useState<string>(photoArray[0]);

  const nextPhoto = () => {
    const currentIndex = photoArray.indexOf(photo);
    const nextIndex = (currentIndex + 1) % photoArray.length;
    setPhoto(photoArray[nextIndex]);
  };

  const previousPhoto = () => {
    const currentIndex = photoArray.indexOf(photo);
    const previousIndex =
      (currentIndex - 1 + photoArray.length) % photoArray.length;
    setPhoto(photoArray[previousIndex]);
  };

  // on the desktop When customer click on one of the list of images below, display it as a large image
  const handleImgClick = (xImg: string): void => {
    setPhoto(xImg);
  };

  return (
    <SlyderContainer openImg={openImg}>
      {/* this productCont only appear on mobile,tablet, and on desktop when user clicked product photo to enlarge it */}
      <div className="desktopContainer">
        <img className="close" src={xIcon} alt=" close icon" />
        <div className="productCont">
          <img className="product" src={photo} alt="" />

          <div className="arrow left">
            <img
              className="prev"
              src={previousIcon}
              alt="previous icon"
              onClick={nextPhoto}
            />
          </div>
          <div className="arrow right">
            <img
              className="next"
              src={nextIcon}
              alt=""
              onClick={previousPhoto}
            />
          </div>
        </div>

        <div className="smallPhotos2">
          <img src={mini1} alt="product photo" />
          <img src={mini2} alt="product photo" />
          <img src={mini3} alt="product photo" />
          <img src={mini4} alt="product photo" />
        </div>
      </div>
      <PhotoContainer>
        <img
          className="mainPhoto"
          src={photo}
          alt=""
          onClick={() => {
            setOpenImg(true);
          }}
        />
        <div className="smallPhotos">
          <img
            src={mini1}
            alt="product photo"
            onClick={() => handleImgClick(product1)}
          />
          <img
            src={mini2}
            alt="product photo"
            onClick={() => handleImgClick(product2)}
          />
          <img
            src={mini3}
            alt="product photo"
            onClick={() => handleImgClick(product3)}
          />
          <img
            src={mini4}
            alt="product photo"
            onClick={() => handleImgClick(product4)}
          />
        </div>
      </PhotoContainer>
    </SlyderContainer>
  );
};

export default Slider;

const SlyderContainer = styled.div<{ openImg: boolean }>`
  width: 100%;
  @media screen and (min-width: 1024px) {
    max-width: 445px;
  }

  .desktopContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;

    @media screen and (min-width: 1024px) {
      display: ${(props) => (props.openImg ? "flex" : "none")};
      position: absolute;
      z-index: 5;
      top: 89px;
      left: 31%;
    }

    .close {
      align-self: flex-end;
      display: none;

      @media screen and (min-width: 1024px) {
        display: flex;
      }
    }

    .smallPhotos2 {
      display: none;

      @media screen and (min-width: 1024px) {
        display: flex;
      }
      width: 100%;
      gap: 31px;
      align-items: center;
      justify-content: center;
      margin-top: 16px;

      img {
        width: 88px;
        height: 88px;
        border-radius: 10px;
      }
    }
  }

  .productCont {
    position: relative;

    max-width: 550px;
    @media screen and (min-width: 1024px) {
    }

    .product {
      aspect-ratio: 2/1;
      width: 100%;
      min-height: 300px;
      object-fit: cover;
      transform: translateX();
      transition: transform 0.4s ease 0s;
      @media screen and (min-width: 400px) {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 20px;
      }
      @media screen and (min-width: 1024px) {
        max-width: 550px;
        height: 550px;
      }
    }

    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 43.3%;
    }

    .left {
      left: 16px;
    }

    .right {
      right: 16px;
    }
  }
`;

const PhotoContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
  }

  width: 445px;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  .mainPhoto {
    width: 445px;
    height: 445px;
    border-radius: 15px;
  }
  .smallPhotos {
    display: flex;
    width: 100%;
    gap: 31px;

    img {
      width: 88px;
      height: 88px;
      border-radius: 10px;
    }
  }
`;
