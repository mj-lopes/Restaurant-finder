import React, { useState } from "react";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import { Container, Search, Wrapper, CarouselTitle, Carousel } from "./styles";

import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png";
import { ImageCard } from "../../components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const carrouselSetting = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
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
            />
          </TextField>
        </Search>
        <CarouselTitle>Na sua Área</CarouselTitle>
        <Carousel {...carrouselSetting}>
          <ImageCard photo={restaurante} />
          <ImageCard photo={restaurante} />
          <ImageCard photo={restaurante} />
          <ImageCard photo={restaurante} />
          <ImageCard photo={restaurante} />
          <ImageCard photo={restaurante} />
          <ImageCard photo={restaurante} />
          <ImageCard photo={restaurante} />
          <ImageCard photo={restaurante} />
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default Home;
