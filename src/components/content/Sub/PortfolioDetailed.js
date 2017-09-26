import React, { Component } from 'react';
import { Image, Divider, Container, Segment, Grid } from 'semantic-ui-react';

import Underblue from '../../../../assets/images/UnderblueSite.jpg';
import WrkBook from '../../../../assets/images/WrkBook.jpg';
import '../../../../assets/style/content/portfolio.css';

export default class PortfolioDetailed extends Component {
    render() {
        return (
            <div className="section-margin">
                <Divider /><Divider className="section-divider" horizontal><h3>Portfolio</h3></Divider>
                <Grid stackable>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <h3>officialunderblue.com</h3>
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
                <br/><br/>
                <Grid stackable>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <h3>wrkbook.com (contributor)</h3>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Image size="big" src={WrkBook} href="http://wrkbook.com" />
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <h3>WrkBook is a job matching and employment services company for contractors
                            and skilled laborers, based in NYC. The company uses React and Meteor to build
                            its website. WrkBook was in Alpha as of Summer 2017.</h3>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}