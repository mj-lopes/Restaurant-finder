import React, { useState } from "react";
import { useSelector } from "react-redux";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import { Container, Search, Wrapper, CarouselTitle, Carousel } from "./styles";

import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png";
import { ImageCard, Map, RestaurantCard } from "../../components";
import Modal from "../../components/Modal";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

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

  return (
    <Wrapper>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
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
          <RestaurantCard key={restaurant.place_id} restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} />
    </Wrapper>
  );
};

export default Home;
