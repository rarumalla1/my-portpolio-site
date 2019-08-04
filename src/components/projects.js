import React, {Component} from 'react';
import {Tab, Tabs, Cell, Grid} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategoties () {
        if(this.state.activeTab === 0){
            return(
                <div><h1>This is AWS</h1></div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Java</h1></div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div><h1>This is Python</h1></div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div><h1>This is PCF</h1></div>
            )
        } else if(this.state.activeTab === 4){
            return(
                <div><h1>This is Apigee</h1></div>
            )
        } 
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>AWS</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                    <Tab>PCF</Tab>
                    <Tab>APIGEE</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategoties}</div>
                        </Cell>
                    </Grid>
                    {this.toggleCategoties()}

                 </section>

                 
             
            </div>
        )
    }
}

export default Projects;