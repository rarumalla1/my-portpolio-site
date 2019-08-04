import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
              <Grid className="landing-grid"> 
                 <Cell col={12}>
                  <img
                  src="http://tigernewspaper.com/wp-content/uploads/2015/07/minions.jpg"
                  alt="minion"
                  className="minion-img"
                  />  

                  <div className="banner-text">
                      <h1>Full Stack Web Developer</h1>

                      <hr/>
                      <p>AWS | Java | Python | PCF | Apigee</p>
                  </div>
                 </Cell>
              </Grid>
            </div>
        )
    }
}

export default LandingPage;