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
                    <a target="_blank" href="https://freetoday.herokuapp.com"><h3>freetoday.herokuapp.com</h3></a><br/>
                    <a target="_blank" href="http://github.com/Argonautic/FreeTodayMeteor"><h5>Github Repo</h5></a><br/>
                    <Image centered size="big" src={FreeToday} target="_blank" href="https://freetoday.herokuapp.com" />
                </Container>
                <Divider hidden />
                <Container>
                    <a target="_blank" href="http://officialunderblue.com"><h3>officialunderblue.com</h3></a><br/>
                    <a target="_blank" href="http://github.com/Argonautic/OfficialUnderblue"><h5>Github Repo</h5></a><br/>
                    <Image centered size="big" src={Underblue} target="_blank" href="http://officialunderblue.com" />
                </Container>
            </div>
        )
    }
}