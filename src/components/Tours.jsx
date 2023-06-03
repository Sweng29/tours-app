import React from "react";
import Tour from "./Tour";
import Loading from "./Loading";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tour</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
      {!tours && (
        <div>
          <h2>No tours left</h2>
          <button onClick={() => fetchTours()}>Reload</button>
        </div>
      )}
    </section>
  );
};

export default Tours;
