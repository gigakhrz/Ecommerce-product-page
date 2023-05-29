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

  .title {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 19px;

    h4 {
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: 1.85px;
      color: hsla(26, 100%, 55%, 1);
      align-self: flex-start;

      h2 {
        font-size: 28px;
        font-weight: 700;
        line-height: 32px;
        color: hsla(220, 14%, 13%, 1);
      }
    }
  }

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: hsla(220, 9%, 45%, 1);
  }
`;
