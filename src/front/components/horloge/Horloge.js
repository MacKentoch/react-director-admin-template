// @flow

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

// type Props = {};

const CENTIEME_SEC = 1000;
const DATE_FORMAT = 'MM/DD/YYYY';
const TIME_FORMAT = 'HH:MM:SS';

function Horloge() {
  const [date, setDate] = useState(format(new Date(), DATE_FORMAT));
  const [time, setTime] = useState(format(new Date(), TIME_FORMAT));

  useEffect(() => {
    function ticTac() {
      const now = new Date();
      setDate(format(now, DATE_FORMAT));
      setTime(format(now, TIME_FORMAT));
    }

    const horloge = setInterval(() => ticTac(), CENTIEME_SEC);

    return () => {
      clearInterval(horloge);
    };
  }, []);

  return (
    <div
      className="row horlogeContainer dateAndTimeContainer text-center"
      style={{ marginLeft: 0, marginRight: 0 }}
    >
      <div className="col-xs-12 dateAndTimeContainer">
        <h2 className="text-center" style={{ marginTop: '5px' }}>
          <span className="horlogeTime">{time}</span>
        </h2>
        <h5 className="text-center">
          <span className="horlogeDate">{date}</span>
        </h5>
      </div>
    </div>
  );
}

Horloge.displayName = 'Horloge';

export default Horloge;
