// @flow

import React from 'react';
import { shallow } from 'enzyme';
import EarningGraph from './EarningGraph';

describe('EarningGraph component', () => {
  const props = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  it('renders as expected', () => {
    const component = shallow(<EarningGraph {...props} />);
    expect(component).toMatchSnapshot();
  });
});
