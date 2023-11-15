// import { Capacitor } from '@capacitor/core';

// export function constructUrl(path: string) {
//   const isNative = Capacitor.isNativePlatform; // Check if running in native mode

//   // Set your API base URL for different environments
//   const webApiBaseUrl = 'https://yourserver.com';
//   const nativeApiBaseUrl = 'https://yourserver.com/api'; // Adjust for your mobile API endpoint

//   // Construct the URL based on the app mode
//   const baseUrl = isNative ? nativeApiBaseUrl : webApiBaseUrl;
//   return baseUrl + path;
// }


// import { Capacitor } from '@capacitor/core'; // Import Capacitor if needed

// export function Url(path) {
//   let origin = Capacitor.isNative ? publicRuntimeConfig.api_origin : "mongodb+srv://skazmi14:a3rNjZ5jWNF1a5U0@cluster0.rrro2vt.mongodb.net/schema?retryWrites=true&w=majority";
//   return origin + "/" + path;
// }



// function Url(path: string) {
//   const isNative = false; // Capacitor is not available in server-side context
// const publicRuntimeConfig = {
//   api_origin: 'mongodb+srv://skazmi14:a3rNjZ5jWNF1a5U0@cluster0.rrro2vt.mongodb.net/schema?retryWrites=true&w=majority',
// };

// const origin = isNative ? publicRuntimeConfig.api_origin : '';
// return origin + '/' + path;
// }