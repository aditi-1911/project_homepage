import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';


// const useStyles = makeStyles({
//   root: {
//     // minHeight: '100vh',
//     // display: 'flex',
//     // justifyContent: 'center',
//     // alignItems: 'center'
//   }
// })



  
export default function Login() {
  
  // const classes = useStyles();
  return (
    
       
    <div class="container login-container">
            <div class="row">
              
              <div class="col-md-6 login-form-1">
                    <h3>Register</h3>
                    
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        <div class="form-group">
                            <a href="#" class="btnForgetPwd">Forget Password?</a>
                        </div>
                    
                </div>
              
                <div class="col-md-6 login-form-2">
                    <div class="login-logo">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                    </div>
                    <h3>Login</h3>
       
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        <div class="form-group">

                            <a href="#" class="btnForgetPwd" value="Login">Forget Password?</a>
                        </div>
                    
                </div>
              
                
            </div>
        </div>

        

  );
}