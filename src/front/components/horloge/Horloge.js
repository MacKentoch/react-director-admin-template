// @flow

import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

const Container = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: outset;
  border-top-width: 1px;
  border-top-style: outset;
  margin: 10px 0;
  color: rgb(238, 238, 238);
  text-align: center;
`;

const DateAndTimeContainer = styled.div`
  color: rgb(238, 238, 238);
`;

const HorlogeTime = styled.h2`
  margin-top: 5px;
  font-size: 26px;
  text-align: center;
`;

const HorlogeDate = styled.h5`
  font-size: 13px;
  text-align: center;
`;

const CENTIEME_SEC = 1000;
const DATE_FORMAT = 'MM/DD/YYYY';
const TIME_FORMAT = 'hh:mm:ss';

function Horloge() {
  const [date, setDate] = useState(format(new Date(), DATE_FORMAT));
  const [time, setTime] = useState(format(new Date(), TIME_FORMAT));
  const horlogeTimer = useRef(null);

  useEffect(() => {
    function ticTac() {
      const now = new Date();

      setDate(format(now, DATE_FORMAT));
      setTime(format(now, TIME_FORMAT));
    }

    horlogeTimer.current = setInterval(() => ticTac(), CENTIEME_SEC);

    return () => {
      clearInterval(horlogeTimer.current);
    };
  }, []);

  return (
    <Container className="row">
      <DateAndTimeContainer className="col-xs-12">
        <HorlogeTime>
          <span className="horlogeTime">{time}</span>
        </HorlogeTime>
        <HorlogeDate>
          <span className="horlogeDate">{date}</span>
        </HorlogeDate>
      </DateAndTimeContainer>
    </Container>
  );
}

Horloge.displayName = 'Horloge';

export default Horloge;
