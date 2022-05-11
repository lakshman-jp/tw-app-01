import React from "react";

import * as LAKS from "../UI/LAKS";

const HomePage = () => {
  return (
    <React.Fragment>
      {/* Navigation Bar */}
      <LAKS.Header />

      {/* Hero Banner */}
      <LAKS.Banner />

      {/* Main Contents */}
      <LAKS.Places />
      <LAKS.Categories />
      <LAKS.Collections />
      <LAKS.Teams />
      <LAKS.Testiminials />
      <LAKS.Contact />
      <LAKS.Features />
      <LAKS.Loading />

      {/* Navigation Bar */}
      <LAKS.Footer />
    </React.Fragment>
  );
};

export default HomePage;
