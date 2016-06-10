'use strict';

export const appConfig = {
  // dev mode to mock async data for instance
  DEV_MODE: true,
  // When you need some kind "console spam" to debug
  DEBUG_ENABLED: true,
  // fake delay to mock async
  FAKE_ASYNC_DELAY: 1000,

  // eaningGraph config
  earningGraph: {
    data: {
      API: 'api/earnigGraphData'
    }
  }


};
