import React from 'react';
import './sidebar.css'
import { Icon, Button } from 'semantic-ui-react';

const Sidebar = () => {

    return(
        <div className = "sidebar-Pane">
            <div className = "sidebar-content">
                <h3 id = "l1">Vegan Chat</h3>
                <div className = "users_online">
                    <h5 id = "h5"> <Icon name = "certificate" /> Online Users</h5>
                    <div className = "h5">
                        <h5>User 1</h5>
                        <h5>User 2</h5>
                        <h5>User 3</h5>
                        <h5>User 4</h5>
                        <h5>User 5</h5>
                    </div>
                    <h5 id = "h5"> <Icon name = "bug" /> Blocked Users</h5>
                    <div className = "h5">
                        <h5>User 1</h5>
                        <h5>User 2</h5>
                    </div>
                    <div className = "logoutDiv">
                        <Button id = "signOut">Sign Out</Button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Sidebar