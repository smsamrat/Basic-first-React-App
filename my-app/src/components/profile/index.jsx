import React from "react";
import './profile.style.css'
import Bio from './bio'
import Skills from './skills'
import Skill2 from './skill2'
import Social from './social'

class Profile extends React.Component{
    me = {
        name : 'I am Samrat',
        title : 'I am Web developer',
        skillA : 'Python',
        skillB : 'Python',
        skillC : 'Python',
    }
    render ()
        {
            return(
                <div className="container">
                    <Bio name={this.me.name} title={this.me.title} />
                    <Skills 
                    
                        skillA ={this.me.skillA}
                        skillB ={this.me.skillB}
                        skillC ={this.me.skillC}
                    /> 

                    <Skill2
                        skillA = 'React'
                        skillB = 'React'
                        skillC = 'React'
                    />
                    <Social/> 
                    
                </div>
            )   
        }
}
export default Profile; 