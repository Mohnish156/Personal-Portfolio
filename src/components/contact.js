import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class contact extends Component{
    render(){
        return(
            <div className = "contact-body"> 
                <Grid className = "contact-grid">
                    <Cell col = {12}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className = "contact-list">
                        
            <List>
             <ListItem>
                 <ListItemContent style ={{fontSize:'30px',fontFamily: 'Anton'}}>
                 <i className ="fa fa-phone-square" aria-hidden = "true"/>
                 021-0566121
                 </ListItemContent>
                  
                     </ListItem>
            
                     <ListItem>
                 <ListItemContent style ={{fontSize:'30px',fontFamily: 'Anton'}}>
                 <i className ="fa fa-envelope" aria-hidden = "true"/>
                 mohnishram2001@gmail.com
                 </ListItemContent>
                  
                     </ListItem>

                        
                  </List>
                
                    </div>
                        </Cell>
                    </Grid> 
                </div>
         )
    }
}
export default contact;