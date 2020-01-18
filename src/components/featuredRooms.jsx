import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./loading";
import Room from "./room";
import Title from "./Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  state = {};
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room}></Room>;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
