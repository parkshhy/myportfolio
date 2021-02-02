import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div className="project-grid"> 
               <Grid className="landing-grid" style={{height:'100%', margin:'auto'}}> 
                    <Cell col={12}>
                        <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png"
                        alt="avater"
                        className="avatar-img"
                        />
                        <div className="benner-text">
                            <h1>Welcome to MyPage</h1>

                            <hr/>

                           
                        </div>
                    
                        
                    </Cell>
               </Grid>
            </div> 
        )
    }
}
export default Landing;