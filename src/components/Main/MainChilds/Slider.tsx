import { useEffect, useState } from "react";
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
import mini4 from "../../../assets/image-product-4-thumbnail.jpg";

interface SliderProps {
  openImg: boolean;
  setOpenImg: (openImg: boolean) => void;
}

let nextIndex: number;
const Slider = ({ openImg, setOpenImg }: SliderProps): JSX.Element => {
  const photoArray = [product1, product2, product3, product4];
  const smallPhotos = [mini1, mini2, mini3, mini4];
  const [photo, setPhoto] = useState<string>(photoArray[1]);

  // for picked photo border and oapcity
  const [pick, setPick] = useState<string>(product1);

  const nextPhoto = () => {
    const currentIndex = photoArray.indexOf(photo);
    nextIndex = (currentIndex + 1) % photoArray.length;
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
    setSneakersPhoto(xImg);
    setPhoto(xImg);
  };

  // for desktop slider
  const [sneakersPhoto, setSneakersPhoto] = useState<string>(product1);
  const [sneakersPick, setSneakersPick] = useState<string>(product1);

  const handleImgClick2 = (xImg: string): void => {
    setPhoto(xImg);
  };

  //useEfect when change on state this will change second state
  useEffect(() => {
    setPhoto(sneakersPhoto);
  }, [sneakersPhoto]);

  console.log(photo);
  //
  //
  return (
    <SlyderContainer
      openImg={openImg}
      sneakersPick={sneakersPick}
      photo={photo}
    >
      {/* this productCont only appear on mobile,tablet, and on desktop when user clicked product photo to enlarge it */}
      <div className="desktopContainer">
        <svg
          className="close"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setOpenImg(false);
          }}
        >
          <path
            d="M2,2 L18,18 M18,2 L2,18"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
        </svg>

        <div className="productCont" onClick={nextPhoto}>
          <img className="product" src={photo} alt="" />

          <div className="arrow left">
            <img className="prev" src={previousIcon} alt="previous icon" />
          </div>
          <div className="arrow right" onClick={previousPhoto}>
            <img className="next" src={nextIcon} alt="" />
          </div>
        </div>
        <div className="smallPhotos2">
          {smallPhotos.map((smallPhoto, index) => (
            <div
              className={`thumb ${photoArray[index] === photo ? "select" : ""}`}
              key={index}
              onClick={() => {
                setSneakersPick(photoArray[index]);
                handleImgClick2(photoArray[index]);
              }}
            >
              <img src={smallPhoto} alt="product photo" />
              <div
                className="hover"
                style={{
                  display: photoArray[index] === photo ? "block" : "",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <PhotoContainer pick={pick} sneakersPhoto={sneakersPhoto}>
        <img
          className="mainPhoto"
          src={sneakersPhoto}
          alt=""
          onClick={() => {
            setOpenImg(true);
          }}
        />
        <div className="smallPhotos">
          {smallPhotos.map((smallPhoto, index) => (
            <img
              key={index}
              src={smallPhoto}
              alt="product photo"
              className={photoArray[index] === sneakersPhoto ? "selected" : ""}
              onClick={() => {
                handleImgClick(photoArray[index]);
                setPick(photoArray[index]);
              }}
            />
          ))}
        </div>
      </PhotoContainer>
    </SlyderContainer>
  );
};

export default Slider;

const SlyderContainer = styled.div<{
  openImg: boolean;
  sneakersPick: string;
  photo: string;
}>`
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
        cursor: pointer;
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

      .thumb {
        position: relative;
        cursor: pointer;
        width: 88px;
        height: 88px;
        border-radius: 10px;
      }
      .select {
        outline: 2px solid #ff7e1b;
      }

      .thumb:hover .hover {
        display: block;
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.5),
          rgba(255, 255, 255, 0.5)
        );
      }

      .hover {
        border-radius: 10px;
        display: none;
        position: absolute;
        width: 88px;
        height: 88px;
        top: 0;
        right: 0;
        left: 0;
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.75),
          rgba(255, 255, 255, 0.75)
        );
      }

      img {
        width: 88px;
        height: 88px;
        border-radius: 10px;
        z-index: 10;
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
        cursor: pointer;
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
      @media screen and (min-width: 1024px) {
        cursor: pointer;
        width: 56px;
        height: 56px;
      }
    }

    .left {
      left: -25px;
    }

    .right {
      right: -25px;
    }
  }
`;

const PhotoContainer = styled.div<{ pick: string; sneakersPhoto: string }>`
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
    cursor: pointer;
  }
  .smallPhotos {
    display: flex;
    width: 100%;
    gap: 31px;

    img {
      width: 88px;
      height: 88px;
      border-radius: 10px;
      cursor: pointer;
    }

    img.selected {
      opacity: ${(props) =>
        props.pick === props.sneakersPhoto ? " 0.25 " : ""};
      border: ${(props) =>
        props.pick === props.sneakersPhoto ? "2px solid #FF4400 " : ""};
    }

    img:hover {
      opacity: 0.5;
    }
  }
`;
