import React from 'react';
import './styles/main.scss';
import EditForm from './Components/EditForm/EditForm';

class App extends React.Component {

   render() {
      return (
         <div className="App">
            <EditForm />
         </div>
      );
   }
}

export default App;
