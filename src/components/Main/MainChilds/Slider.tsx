import { useState } from "react";
import styled from "styled-components";
import nextIcon from "../../../assets/icon-next.svg";
import previousIcon from "../../../assets/icon-previous.svg";
import product1 from "../../../assets/image-product-1.jpg";
import product2 from "../../../assets/image-product-2.jpg";
import product3 from "../../../assets/image-product-3.jpg";
import product4 from "../../../assets/image-product-4.jpg";

const Slider = (): JSX.Element => {
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

  return (
    <SlyderContainer>
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
        <img className="next" src={nextIcon} alt="" onClick={previousPhoto} />
      </div>
    </SlyderContainer>
  );
};

export default Slider;

const SlyderContainer = styled.div`
  width: 100%;
  position: relative;
  .product {
    width: 100%;
    height: 300px;
    aspect-ratio: 2/1;
    object-fit: cover;
    transform: translateX();
    transition: transform 0.4s ease 0s;
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
`;
