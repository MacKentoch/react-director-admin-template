/* eslint-disable no-unused-vars */

// for import 'somestyle.css':
declare module CSSModule {
  declare var exports: { [key: string]: string };
}

// for module.hot.reload:
declare var module : {
  hot : {
    accept(path:string, callback:() => void): void;
  };
};

// for jQuery:
declare var $: any;
