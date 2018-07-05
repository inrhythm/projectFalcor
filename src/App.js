import React from 'react';
import './styles/main.scss';
// import PersonEdit from './Components/PersonEdit/PersonEdit';
import PeoplePage from './components/people_page.js'

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
