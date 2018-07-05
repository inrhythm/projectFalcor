import React from 'react';
import './Login.scss';

class Login extends React.Component {
   render() {
      return (
         <div className="container--max">
            <div className="col-10">
               <form action="">
                  <label>
                     Username:
                     <input type="text" name="username"/>
                  </label>
               </form>
            </div>
         </div>
      );
   }
}

export default Login;
