# A project for train some things and use GitHub search api

Since this project was bootstrapped with Create React App you can use it's commands.

To run application enter `npm i` than `npm start`.
The application should open on page [http://localhost:3000](http://localhost:3000) automatically.

# The project

All code you need you can find in 'src' directory. Here is some tips for you:

- src/index.tsx - entry for application;
- src/App.tsx - component that responsible for data operation. Since it's quite simple application 
  I used React useReducer api instead of Redux;
- src/actionCreators - directory for redux action creators and action types;
- src/api - here you can find async action like data fetchers and types for api responses;
- src/components - views of UI blocks;
- src/helpers - some useful functions;
- src/reducers - directory where you should keep redux reducers. The good thing with useReducer - reducers looks similar;
- src/selectors - selectors - they collect data from store and convert it to format that expect views;
- src/styles - directory with sass mixins and variables.