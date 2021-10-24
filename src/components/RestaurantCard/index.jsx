import styled from "styled-components";
import Stars from "react-rating-stars-component";

import restaurante from "../../assets/restaurante-fake.png";

const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  margin-top: 5px;
  padding: 8px;
  padding-left: 8px;

  cursor: pointer;

  background-color: white;
  border-left: 5px solid transparent;
  transition: 0.3s;

  &:hover {
    border-color: ${(props) => props.theme.color.primary};
    border-radius: 8px;
  }
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const RestaurantTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.color.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.4;
`;

const RestaurantAddress = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.color.text};
  font-size: 1rem;
  line-height: 1.4;
  margin-top: 0.5rem;
`;

const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;

  display: block;
  border-radius: 12px;
`;

export const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <RestaurantTitle>Casa de Noca Pizzaria</RestaurantTitle>
      <Stars
        count={5}
        value={4.5}
        edit={false}
        isHalf
        activeColor={"#E7711C"}
      />
      <RestaurantAddress>
        Local Da casa da Pqp na rua da miseria futuro esquecido
      </RestaurantAddress>
    </RestaurantInfo>
    <RestaurantPhoto
      src={restaurante}
      alt={"foto do restaurante"}
    ></RestaurantPhoto>
  </Restaurant>
);
