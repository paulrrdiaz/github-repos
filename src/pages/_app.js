import "src/styles/app.scss";

import React from "react";
import Navbar from "src/components/Navbar";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
