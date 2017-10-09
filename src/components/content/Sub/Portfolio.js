import React, { Component } from 'react';
import { Image, Divider, Container } from 'semantic-ui-react';

import Underblue from '../../../../assets/images/UnderblueSite.jpg';
import FreeToday from '../../../../assets/images/FreeToday.jpg';
import '../../../../assets/style/content/portfolio.css';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="section-margin">
                <Divider /><Divider className="section-divider" horizontal><h3>Portfolio</h3></Divider>
                <Container>
                    <a href="https://freetoday.herokuapp.com"><h3>freetoday.herokuapp.com</h3></a><br/>
                    <Image centered size="big" src={FreeToday} href="https://freetoday.herokuapp.com" />
                </Container>
                <Divider hidden />
                <Container>
                    <a href="http://officialunderblue.com"><h3>officialunderblue.com</h3></a><br/>
                    <Image centered size="big" src={Underblue} href="http://officialunderblue.com" />
                </Container>
            </div>
        )
    }
}