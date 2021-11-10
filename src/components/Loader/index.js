import React from "react";
import Lottie from "react-lottie";

import animationData from "../../assets/restaurants-loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYmid slice",
  },
};

const Loader = () => {
  return <Lottie options={defaultOptions} />;
};

export default Loader;
