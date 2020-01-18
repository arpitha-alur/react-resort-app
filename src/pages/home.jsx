import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Services from "../components/services";
import FeaturedRooms from "../components/featuredRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Luxurious Rooms" subtitle="Deluxe room starting at $199">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
