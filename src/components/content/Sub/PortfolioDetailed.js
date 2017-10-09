import React, { Component } from 'react';
import { Image, Divider, Container, Segment, Grid } from 'semantic-ui-react';

import Underblue from '../../../../assets/images/UnderblueSite.jpg';
import FreeToday from '../../../../assets/images/FreeToday.jpg';
import '../../../../assets/style/content/portfolio.css';

export default class PortfolioDetailed extends Component {
    render() {
        return (
            <div className="section-margin">
                <Divider /><Divider className="section-divider" horizontal><h3>Portfolio</h3></Divider>
                <Grid stackable>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <a href="https://freetoday.herokuapp.com"><h3>freetoday.herokuapp.com</h3></a><br/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Image size="big" src={FreeToday} href="https://freetoday.herokuapp.com" />
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <h3>Find out what's going on in your neighborhood! Exercise in Full-stack
                            security, Google-Maps/React integration & async programming, and
                            GeoJSON manipulation. Built with Meteor, React, MongoDB, and Google Maps.</h3>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <br/><br/>
                <Grid stackable>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <a href="http://officialunderblue.com"><h3>officialunderblue.com</h3></a><br/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Image size="big" src={Underblue} href="http://officialunderblue.com" />
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <h3>officialunderblue.com is the (aptly named) official website of the NYC indie rock band
                                Underblue, in which Jon also performs as a guitarist and composer. The website is built
                                almost entirely with React, Javascript, and Webpack</h3>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}