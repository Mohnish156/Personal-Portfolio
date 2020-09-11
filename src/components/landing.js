import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class landing  extends Component{
    render(){
        return(
            <div sytle = {{width: '100%', margin: 'auto'}} > 
            <Grid className = "landing-grid">
                <Cell col ={12}>
                    <img
                     src = "/images/circle.png"
                     alt = "profile-pic"
                     className = "profile-img"   
                    />
                    <div className = "profile-text">
                        <h1>
                            Mohnish Ramanujam 
                        
                        </h1>
                        <hr/>
                        <p> Java | C/C++ | JavaScript | React </p>
                        
                        <div className = "social-links">
                            {/*Github link */}
                            <a href="https://github.com/Mohnish156" rel = "noopener noreferrer" target = "_blank">
                                <i className = "fa fa-github-square"  aria-hidden = "true"/>
                            </a>

                            {/*linkedin link */}
                            <a href="www.linkedin.com/in/mohnish-ramanujam-3311161b6" rel = "noopener noreferrer" target = "_blank">
                                <i className = "fa fa-linkedin-square"  aria-hidden = "true"/>
                            </a>

                        </div>
                    </div>
                </Cell>
            </Grid>
                
                </div>
         )
    }
}
export default landing ;