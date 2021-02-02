import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton, Button, CardText } from 'react-mdl';
import { HashRouter as Router } from "react-router-dom";
import Toyata from "./project/Toyata";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 1 };
      
     }
     state = {
        isOpen:false
    };

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div><h1>
                    <div className="projects-grid">
                        {/*Project1*/}

                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://www.eetasia.com/wp-content/uploads/sites/2/images/c62d7015-fde1-4934-9993-0ccf6e27e14b.png) center / cover'
                            }}>
                                React project #1
                </CardTitle>
                            <CardText>
                                ehdgoanfrhk qorentksdl akfmrh ekfaehfhr gkskssladl qhdngktk dnflskfkakstp
                </CardText>
                            <CardActions border>
                                <Button>
                                <Router path="/project/Toyato" exact component={Toyata}/>dd</Button>    


                                <Button>LiveDepm</Button> 
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </Card></div></h1></div>

            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1><div className="projects-grid">
                        {/*docomo*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://www.unlockjp.com/en/wp-content/uploads/2020/01/d.jpg) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                일본 도코모
                </CardText>
                            <CardActions border>
                                <Button disabled="disabled"></Button>


                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*denso*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://www.eetasia.com/wp-content/uploads/sites/2/images/c62d7015-fde1-4934-9993-0ccf6e27e14b.png) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                일본 덴소
                </CardText>
                            <CardActions border>
                                <Button disabled="disabled">GitHub</Button>
                                <Button>Detail</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*toyota*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://logos-world.net/wp-content/uploads/2020/04/Toyota-Logo.png) center / cover'
                            }}>

                            </CardTitle>
                            <CardText>
                                일본 토요타
                </CardText>
                            <CardActions border>
                                <Button disabled="disabled">GitHub</Button>
                                <Button>Detail</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*Toyata systems*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://d3lckkmmuve1sw.cloudfront.net/attachments/0dfea67a48e300a717950687abd40afaa0b15517/store/c91aef7a3041e862f6beb3c2d6a743287364638ce00bfc8937c83c912db2/80208231.png) center / cover'
                            }}>

                            </CardTitle>
                            <CardText>
                                일본 토요타시스템
                </CardText>
                            <CardActions border>
                                <Button disabled="disabled">GitHub</Button>

                                <Button>Detail</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*React*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-dark_1200x628.png?sfvrsn=19de8226_2) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                일본 오픈세사미 테그놀로지
                </CardText>
                            <CardActions border>
                                <Button disabled="disabled">GitHub</Button>
                                <Button></Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div></h1></div >
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>개인프로젝트</h1></div>
            )

        }
    }



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab}
                    onChange={(tabId => this.setState({ activeTab: tabId }))} ripple>
                    <Tab>종로기관프로젝트</Tab>
                    <Tab>실무프로젝트</Tab>
                    <Tab>개인프로젝트</Tab>

                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}
export default Projects;