import React, {
  Component
}                 from 'react';
import moment     from 'moment';

const CENTIEME_SEC = 1000;
const DATE_FORMAT  = 'DD/MM/YYYY';
const TIME_FORMAT  = 'HH:mm:ss';

class Horloge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('DD/MM/YYYY'),
      time: moment().format('HH:MM:SS')
    };
  }

  componentDidMount() {
    this.horloge = window.setInterval(
      ()=>this.ticTac(),
      CENTIEME_SEC
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.horloge);
    this.horloge = null;
  }

  render() {
    const { time, date } = this.state;
    return (
      <div
        className="row horlogeContainer dateAndTimeContainer text-center"
        style={{marginLeft: 0, marginRight: 0}}>
        <div className="col-xs-12 dateAndTimeContainer">
          <h2 
            className="text-center"
            style={{marginTop: '5px'}}>
            <span className="horlogeTime">
              {time}
            </span>
          </h2>
          <h5 className="text-center">
            <span className="horlogeDate">
              {date}
            </span>
          </h5>
        </div>
      </div>
    );
  }

  ticTac() {
    this.setState({
      date: moment().format(DATE_FORMAT),
      time: moment().format(TIME_FORMAT)
    });
  }
}

export default Horloge;
