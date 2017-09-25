import React, { Component } from 'react';
import { Segment, Grid, Icon, Divider } from 'semantic-ui-react';

import '../../../assets/style/Content/default.css';

export default class Default extends Component {
    render() {
        return (
            <div className="header-margin">
                <Segment id="landing" inverted padded>
                    <h1 id="name">Jonathan Zhou</h1>
                    <h3>Software Engineer & Web Developer</h3>
                </Segment>
                <div>
                    <h1>Web Development</h1>
                    <Grid padded columns={4}>
                        <Grid.Row>
                            <Grid.Column>
                                <i className="devicon-django-plain" /><br/>
                                <h4>Django</h4>
                            </Grid.Column>
                            <Grid.Column>
                                <i className="devicon-nodejs-plain" /><br/>
                                <h4>Node</h4>
                            </Grid.Column>
                            <Grid.Column>
                                <i className="devicon-meteor-plain" /><br/>
                                <h4>Meteor</h4>
                            </Grid.Column>
                            <Grid.Column>
                                <i className="devicon-react-original" /><br/>
                                <h4>React</h4>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <br/>
                    <h1>Software Engineering</h1>
                    <Grid padded columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <i className="devicon-python-plain" /><br/>
                                <h4>Python</h4>
                            </Grid.Column>
                            <Grid.Column>
                                <i className="devicon-java-plain" /><br/>
                                <h4>Java</h4>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <br/>
                </div>
                <Divider /><Divider horizontal><h3>Resume</h3></Divider>
                <div>
                    Doobie Doo
                </div>
                <div>

                </div>
            </div>
        )
    }
}