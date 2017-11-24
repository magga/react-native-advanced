// 11-06
// We expect that we'll have more than one actions file, so
//   we create an index.js file to combine all actions into a
//   single file and every component that want to call an 
//   action creators, can just import only this index.js file
export * from './auth_actions';
