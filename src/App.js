import React from 'react';
import './styles/main.scss';
// import PersonEdit from './Components/PersonEdit/PersonEdit';
import PeoplePage from './Components/PeoplePage/PeoplePage.js'

class App extends React.Component {

   /*render() {
      return (
         <div className="app">
            <PersonEdit />
         </div>
      );
   }*/
render() {
      return (
         <div className="app">
            <PeoplePage />
         </div>
      );
   }
}

export default App;
