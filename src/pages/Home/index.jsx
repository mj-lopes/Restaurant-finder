import React, { useState } from "react";
import { useSelector } from "react-redux";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import {
  Container,
  Search,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalTitle,
  ModalContent,
} from "./styles";

import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png";

import {
  ImageCard,
  Loader,
  Map,
  RestaurantCard,
  Skeleton,
  Modal,
} from "../../components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector(
    (state) => state.restaurants,
  );

  const carrouselSetting = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    arrows: false,
  };

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  function hasRestaurantList() {
    return restaurants.length > 0 ? (
      <>
        <CarouselTitle>Na sua Área</CarouselTitle>

        <Carousel {...carrouselSetting}>
          {restaurants.map((restaurant) => (
            <ImageCard
              key={restaurant.place_id}
              photo={
                restaurant.photos ? restaurant.photos[0].getUrl() : restaurante
              }
              name={restaurant.name}
            />
          ))}
        </Carousel>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.place_id}
            restaurant={restaurant}
            onClick={() => handleOpenModal(restaurant.place_id)}
          />
        ))}
      </>
    ) : (
      <Loader />
    );
  }

  function openingModal() {
    return restaurantSelected ? (
      <>
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>
          {restaurantSelected?.formatted_phone_number}
        </ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
        <ModalContent>
          {restaurantSelected?.opening_hours?.open_now
            ? "Aberto agora!"
            : "Fechado!"}
        </ModalContent>
      </>
    ) : (
      <>
        <Skeleton width="10px" height="10px" />
        <Skeleton width="10px" height="10px" />
        <Skeleton width="10px" height="10px" />
        <Skeleton width="10px" height="10px" />
      </>
    );
  }

  return (
    <Wrapper>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {openingModal()}
      </Modal>

      <Container>
        <Search>
          <h1>
            <img src={logo} alt={"Restaurant Finder"} />
          </h1>
          <TextField
            label="Pesquisar restaurante"
            trailingIcon={<MaterialIcon role="button" icon="search" />}
            outlined
            style={{ width: "100%" }}
          >
            <Input
              value={inputValue}
              onChange={({ target }) => setInputValue(target.value)}
              onKeyPress={handleKeyPress}
            />
          </TextField>
        </Search>
        {hasRestaurantList()}
      </Container>
      <Map query={query} placeId={placeId} onClick={handleOpenModal} />
    </Wrapper>
  );
};

export default Home;
