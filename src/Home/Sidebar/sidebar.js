import React, {useState} from 'react';
import './sidebar.css'
import { Icon, Button, Menu } from 'semantic-ui-react';

const Sidebar = ( ) => {

    const [ativeUser, setActiveUser] = useState('')
    const handleClick = (event, {name}) => {
        event.preventDefault()
        setActiveUser(name)
    }

    const [activeBlockedUser, setActiveBlockeUser] = useState('')
    const handleClickBlocked = (event, {name}) => {
        event.preventDefault()
        setActiveBlockeUser(name)
    }
    return(
        <div className = "sidebar-Pane">
            <div className = "sidebar-content">
                <h3 id = "l1">Vegan Chat</h3>
                <div className = "users_online">
                    <h5 id = "h5"> <Icon name = "certificate" /> Online Users</h5>
                    <div className = "h5">
                        <Menu pointing secondary vertical id = "menuBar">
                            <Menu.Item 
                                name = 'User 1'
                                active = {ativeUser === 'User 1'}
                                onClick = {handleClick}
                            />
                            <Menu.Item 
                                name = 'User 6'
                                active = {ativeUser === 'User 6'}
                                onClick = {handleClick}
                            />
                            <Menu.Item 
                                name = 'User 3'
                                active = {ativeUser === 'User 3'}
                                onClick = {handleClick}
                            />
                            <Menu.Item 
                                name = 'User 7'
                                active = {ativeUser === 'User 7'}
                                onClick = {handleClick}
                            />
                            <Menu.Item 
                                name = 'User 5'
                                active = {ativeUser === 'User 5'}
                                onClick = {handleClick}
                            />
                        </Menu>
                        
                    </div>
                    <h5 id = "h5"> <Icon name = "bug" /> Blocked Users</h5>
                    <div className = "h5">
                        <Menu pointing secondary vertical id = "menuBar" >
                             <Menu.Item 
                                name = 'User 2'
                                active = {activeBlockedUser === 'User 2'}
                                onClick = {handleClickBlocked}
                            />
                            <Menu.Item 
                                name = 'User 4'
                                active = {activeBlockedUser === 'User 4'}
                                onClick = {handleClickBlocked}
                            />
                        </Menu>
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