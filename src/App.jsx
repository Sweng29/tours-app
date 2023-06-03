import { useEffect } from "react";
import { useState } from "react";

import "./App.css";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
import CountdownTimer from "./components/CountdownTimer";
import { useCountdown } from "./hooks/useCountdown";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  const THREE_DAYS_IN_MS = 1 * 1 * 15 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const toursResponse = await fetch(url);
      const tours = await toursResponse.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
      setError(true);
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

  if (isError) {
    return (
      <div className="error">
        <CountdownTimer
          targetDate={dateTimeAfterThreeDays}
          fetchTours={fetchTours}
        />
      </div>
    );
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
