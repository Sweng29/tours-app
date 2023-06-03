import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";
import { useState } from "react";

import "./App.css";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const toursResponse = await fetch(url);
      const tours = await toursResponse.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length == 0) {
    return (
      <div className="title">
        <h2>No tours left</h2>
        <button style={{ marginTop: "2rem" }} onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
