import React from 'react';
import './Login.scss';

class Login extends React.Component {

   render() {
      return (
         <div className="container--max">
            <div className="login col-sm-10 col-md-8 col-wd-6">
               <div className="container">
                  <h1 className="login__header col-10">Welcome, Please Log In</h1>
                  <form className="login__container col-10" action="">
                     <label htmlFor="" className="input">
                        <input name="username" type="text" required/>
                     </label>
                     <label htmlFor="" className="input">
                        <input name="password" type="password" required/>
                     </label>
                     <div className="login__buttons">
                        <button className="button--prime">Login</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

export default Login;
