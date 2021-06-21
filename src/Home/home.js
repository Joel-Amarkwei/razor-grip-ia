import React, { useEffect } from 'react';
import './home.css'
import Sidebar from './Sidebar/sidebar';
import { Input } from 'semantic-ui-react';

const Home = () => {

    useEffect(() => {
        document.title = 'Home'
    })
    return (
        <>
            <Sidebar/>
            <div className = "insideThings">
                <div>
                    <Input />
                </div>
            </div>
            
        </>
        
    )
}
export default Home