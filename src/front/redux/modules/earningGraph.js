// @flow

/* eslint no-console:0 */
/* eslint consistent-return:0 */

// #region imports
import { format } from 'date-fns';
import { appConfig } from '../../config';
import { getEarningGraphData } from '../../services/API';
import { fetchMockEarningGraphData } from '../../services/fetchMocks';
import { type Dispatch, type GetState } from '../../types/redux-thunk';
import { type State } from '../../types/redux/modules/earningGraph';
// #endregion

// #region  constants
const REQUEST_EARNING_GRAPH_DATA = 'REQUEST_EARNING_GRAPH_DATA';
const RECEIVED_EARNING_GRAPH_DATA = 'RECEIVED_EARNING_GRAPH_DATA';
const ERROR_EARNING_GRAPH_DATA = 'ERROR_EARNING_GRAPH_DATA';
// #endregion

// #region flow types
type Action = {
  type: | 'REQUEST_EARNING_GRAPH_DATA'
    | 'RECEIVED_EARNING_GRAPH_DATA'
    | 'ERROR_EARNING_GRAPH_DATA',
  error?: ?String,
  labels?: Array<string>,
  datasets?: Array<string>,
  time?: string,
};

// #endregion

/*
  reducer
 */
const initialState: State = {
  isFetching: false,
  labels: [],
  datasets: [],
  time: '',
};

export default function earningGraph(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case 'REQUEST_EARNING_GRAPH_DATA': {
      const { time } = action;
      return {
        ...state,
        isFetching: true,
        time,
      };
    }

    case 'RECEIVED_EARNING_GRAPH_DATA':
      return {
        ...state,
        isFetching: action.isFetching,
        labels: action.labels,
        datasets: action.datasets,
        time: action.time,
      };
    case 'ERROR_EARNING_GRAPH_DATA':
      return {
        ...state,
        isFetching: action.isFetching,
        time: action.time,
      };
    default:
      return state;
  }
}

/*
  action creators
 */
export function fetchEarningGraphDataIfNeeded() {
  return (
    dispatch: Dispatch<Action>,
    getState: GetState<{ earningGraph: State }>,
  ) => {
    if (shouldFetchEarningData(getState())) {
      return dispatch(fetchEarningGraphData());
    }
    return Promise.resolve();
  };
}
function requestEarningGraphData(time? = format(new Date())): Action {
  return {
    type: REQUEST_EARNING_GRAPH_DATA,
    time,
  };
}
function receivedEarningGraphData(
  data: { labels: [], datasets: [] },
  time = format(new Date()),
): Action {
  return {
    type: RECEIVED_EARNING_GRAPH_DATA,
    labels: [...data.labels],
    datasets: [...data.datasets],
    time,
  };
}
function errorEarningGraphData(error, time = format(new Date())): Action {
  return {
    type: ERROR_EARNING_GRAPH_DATA,
    error,
    time,
  };
}
function fetchEarningGraphData(): (...any) => Promise<any> {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(requestEarningGraphData());

      if (appConfig.DEV_MODE) {
        const data = await fetchMockEarningGraphData();
        return dispatch(receivedEarningGraphData(data));
      }

      const data = await getEarningGraphData();
      return dispatch(receivedEarningGraphData(data));
    } catch (error) {
      dispatch(errorEarningGraphData(error));
      return Promise.reject(error);
    }
  };
}
function shouldFetchEarningData(state) {
  const earningGraphStore = state.earningGraph;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (earningGraphStore.isFetching) {
    return false;
  } else {
    return true;
  }
}
