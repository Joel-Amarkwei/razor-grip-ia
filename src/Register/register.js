// This is Register User Component
import React, { useEffect } from 'react';
import './register.css'
import { Input, Button } from 'semantic-ui-react';

const Register = () => {

    useEffect(() => {
        document.title = 'Register User'
    })

    return(
        <div className = "Register_Page">
            <div className = "left-hand-side">
                <div className = "contents-left">
                    Razor Grip Interview <p>Assessment</p> <p>Vegan Chat</p>
                </div>
            </div>
            <div className = "right-hand-side">
                <div className = "contents-right">
                    <h3 id = "h3"> Register User</h3>
                    <form>
                        <div>
                            <label id = "email-Lable">User Email</label>
                            <Input type = "text" placeholder = "user email!" id = "email-Input"/>
                        </div>
                        <div className = "passwordDiv">
                            <label id = "password-Lable"> Password</label>
                            <Input type = "password" placeholder = "preferred password!" id = "password-Input"/>
                        </div>
                        <div className = "submit-Form">
                            <Button type = "submit" id = "submit-Form"> Login </Button>
                        </div>
                        <div className = "oldUser">
                            <a href = "/" id = "oldUser">Already have an account ? </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register