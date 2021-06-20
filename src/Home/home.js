import React, { useEffect } from 'react';
import './home.css'
import Sidebar from './Sidebar/sidebar';

const Home = () => {

    useEffect(() => {
        document.title = 'Home'
    })
    return (
        <>
            <Sidebar/>
            
        </>
        
    )
}
export default Home