import React from 'react';
import './styles/main.scss';
import PersonEdit from './Components/PersonEdit/PersonEdit';

class App extends React.Component {

   render() {
      return (
         <div className="app">
            <PersonEdit />
         </div>
      );
   }


}

export default App;
