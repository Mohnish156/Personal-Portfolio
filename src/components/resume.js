import React, {Component} from 'react';
import{Grid,Cell} from 'react-mdl';

class Resume extends Component{
    render(){
        return(
            <div> 
                <Grid>
                <Cell col = {4}>
                    <div style = {{textAlign: 'center'}}>
                    <img
                    src = "/images/sot.jpg"
                    alt = "profile-pic"
                    className = "profile-img"  
                    />
                    </div>

                    <h2 style = {{paddingTop:'2em'}} > Mohnish Ramanujam</h2>
                    <h4 style = {{color:'grey'}}>Software Engineering Student</h4>
                    <hr style = {{borderTop: '3px solid #833fb2',width:'50%'}}/>
                    
                </Cell>

                <Cell className ="resume-right-col" col = {8}>
                <img
                     src = "/images/resume.PNG"
                     alt = "resume-pic"
                     className = "resume-pic"   
                    />
                </Cell>
                </Grid>
                </div>
         )
    }
}
export default Resume;