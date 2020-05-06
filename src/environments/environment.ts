// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url       : 'http://localhost:5000/fir-fotos-eecb0/us-central1',
  firebase: {
    apiKey: "AIzaSyA8fQSGuxJSb9SyWpZQ0j8NL-H5pNEdLyQ",
    authDomain: "fir-fotos-eecb0.firebaseapp.com",
    databaseURL: "https://fir-fotos-eecb0.firebaseio.com",
    projectId: "fir-fotos-eecb0",
    storageBucket: "fir-fotos-eecb0.appspot.com",
    messagingSenderId: "185270237473",
    appId: "1:185270237473:web:a9831f652077459d1da660"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
