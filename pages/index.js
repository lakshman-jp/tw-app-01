import React, { useEffect } from "react";

import { Header, Banner, Loading, Footer } from "../UI/TW01";
import { PopularPlaces, Categories } from "../UI/TW01";
import { Collections, Teams, Testiminials } from "../UI/TW01";
import { Contact, Features } from "../UI/TW01";

const HomePage = () => {
  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    function listenScroll() {
      // Get the reference
      const navbar = document.querySelector(".navbar");
      const heroHeader = document.querySelector(".hero-header");
      const heroBanner = document.querySelector(".hero-banner");

      const referencePassed =
        window.scrollY + heroHeader.getBoundingClientRect().height >
        heroHeader.offsetTop;

      const navClassNames = referencePassed
        ? ["transparent-nav", "bg-nav"]
        : ["bg-nav", "transparent-nav"];

      navbar.classList.replace(...navClassNames);

      // for navbar text color
      const bannerDimention = heroBanner.getBoundingClientRect();
      const bannerPassed = bannerDimention.top + bannerDimention.height <= 38; // Check if the banner dimention is passed
      const navTextColor = bannerPassed
        ? ["text-white", "text-gray-700"]
        : ["text-gray-700", "text-white"];
      navbar.classList.replace(...navTextColor);
    }
    listenScroll();
  }, []);

  return (
    <React.Fragment>
      {/* Navigation Bar */}
      <Header />

      {/* Hero Banner */}
      <Banner />

      {/* Main Contents */}
      <PopularPlaces />
      <Categories />
      <Collections />
      <Teams />
      <Testiminials />
      <Contact />
      <Features />
      <Loading />

      {/* Navigation Bar */}
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
