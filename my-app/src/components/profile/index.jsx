import React from "react";
import './profile.style.css'
import Bio from './bio'
import Skills from './skills'
import Social from './social'

class Profile extends React.Component{
    render ()
        {
            return(
                <div className="container">
                    <Bio/>
                    <Skills/> 
                    <Social/> 
                    
                </div>
            )   
        }
}
export default Profile; 