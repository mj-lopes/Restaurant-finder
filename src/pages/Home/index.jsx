import React, { useState } from "react";
import { Container, Search } from "./styles";
import TextField, { Input } from "@material/react-text-field";

import logo from "../../assets/logo.svg";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <Search>
        <img src={logo} alt={"Logo da Restaurant Finder"} />
        <TextField
          label="Pesquisar restaurante"
          // onTrailingIconSelect={() => this.setState({ value: "" })}
          // trailingIcon={<MaterialIcon role="button" icon="delete" />}
          outlined
          style={{ width: "100%" }}
        >
          <Input
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
        </TextField>
      </Search>
    </Container>
  );
};

export default Home;
