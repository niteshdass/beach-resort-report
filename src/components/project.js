import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import '../App.css'
import Projects from './Projects'
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }
    toggoleCategories() {
        if (this.state.activeTab === 0) {
            return (
               <div className="projects-grid">
                <Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'React-Resort-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
                    link={'https://google.com'}
                    link1={'https://google.com'}
                    link2={'https://google.com'}
              
              
              />


                <Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'React-Phone-Store-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
               
                    link={'https://google.com'}
                    link1={'https://google.com'}
                    link2={'https://google.com'}
               
               />

<Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'React-Ecomerce-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
                />
                
                
               </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'React-Native-Resort-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
                    link={'https://google.com'}
                    link1={'https://google.com'}
                    link2={'https://google.com'}
                />
                <Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'React-Native-Phone-Store-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
                    link={'https://google.com'}
                    link1={'https://google.com'}
                    link2={'https://google.com'}
                
                />
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                       <Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'Mern-Resort-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
                />


                <Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'Mern-Phone-Store-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
                />

<Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'Mern-Ecomerce-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
                />
                
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                       <Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'Laravel-Resort-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
                />


                <Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'Laravel-Phone-Store-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
                />

<Projects
                    img={'http://www.getmdl.io/assets/demos/welcome_card.jpg'}
                    name={'Laravel-Ecomerce-App'}
                    desc={`Mauris sagittis pellentesque lacus eleifend lacinia...  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...`}
                />
                
                </div>
            )
        }
        else if (this.state.activeTab === 4) {
            return (
                <div><h1>This is Node</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>React-Native</Tab>
                    <Tab>MERN</Tab>
                    <Tab>Laravel</Tab>
                    <Tab>Node js</Tab>
                </Tabs>
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggoleCategories()}
                            </div>
                        </Cell>
                    </Grid>

                
            </div>
        )
    }
}
export default Project;