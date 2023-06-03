import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/useCountdown";

const ExpiredNotice = ({ fetchTours }) => {
  return (
    <div className="expired-notice">
      <span>Your can refresh Page now</span>
      <button style={{ marginTop: "2rem" }} onClick={() => fetchTours()}>
        Refresh
      </button>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate, fetchTours }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice fetchTours={fetchTours} />;
  } else {
    return (
      <section>
        <h5>
          Something went worng, try again later after {minutes} mintues{" "}
          {seconds} seconds!
        </h5>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </section>
    );
  }
};

export default CountdownTimer;
