import styled from "styled-components";

const Description = (): JSX.Element => {
  return (
    <DescriptionCont>
      <div className="title">
        <h4>Sneaker Company</h4>
        <h2>Fall Limited Edition Sneakers</h2>
      </div>

      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
    </DescriptionCont>
  );
};

export default Description;

const DescriptionCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 0 24px;
  @media screen and (min-width: 1024px) {
    max-width: 445px;
    gap: 32px;
  }

  .title {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 19px;
    width: 100%;
    @media screen and (min-width: 1024px) {
      gap: 27px;
    }

    h4 {
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: 1.85px;
      color: hsla(26, 100%, 55%, 1);
      align-self: flex-start;
      @media screen and (min-width: 1024px) {
        font-size: 13px;
        line-height: 16.12px;
      }
    }

    h2 {
      font-size: 28px;
      font-weight: 700;
      line-height: 32px;
      color: hsla(220, 14%, 13%, 1);
      @media screen and (min-width: 1024px) {
        font-size: 44px;
        line-height: 48px;
      }
    }
  }

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: hsla(220, 9%, 45%, 1);
    @media screen and (min-width: 1024px) {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;
