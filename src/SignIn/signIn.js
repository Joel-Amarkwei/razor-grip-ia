///     This is SignIn Components
import React, { useEffect } from 'react';
import './signIn.css';
import { Input, Button } from 'semantic-ui-react';

const SignIn = () => {

    useEffect(() => {
        document.title = 'Sign In'
    })

    return(
        <div className = "SignIn_Page">
            <div className = "left-side">
                <div className = "content-left">
                    Razor Grip Interview <p>Assessment</p> <p>Phase Two</p>
                </div>
            </div>
            <div className = "right-side">
                <div className = "content-right">
                    <h3 id = "H3"> Vegan Chat Inc </h3>
                    <form>
                        <div>
                            <label id = "emailLable">Email</label>
                            <Input type = "text" placeholder = "email!" id = "emailInput"/>
                        </div>
                        <div className = "passwordDiv">
                            <label id = "passwordLable"> Password</label>
                            <Input type = "password" placeholder = "password!" id = "passwordInput"/>
                        </div>
                        <div className = "submitForm">
                            <Button type = "submit" id = "submitForm"> Login </Button>
                        </div>
                        <div className = "newUser">
                            <a href = "/register" id = "newUser">Sign Up A New User ?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default SignIn