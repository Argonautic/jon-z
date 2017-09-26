import React, { Component } from 'react';
import { Image, Divider, Container } from 'semantic-ui-react';

import Underblue from '../../../../assets/images/UnderblueSite.jpg';
import WrkBook from '../../../../assets/images/WrkBook.jpg';
import '../../../../assets/style/content/portfolio.css';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="section-margin">
                <Divider /><Divider horizontal><h3>Portfolio</h3></Divider>
                <br/>
                <Container>
                    <h3>officialunderblue.com</h3>
                    <Image centered size="big" src={Underblue} href="http://officialunderblue.com" />
                </Container>
                <Divider hidden />
                <Container>
                    <h3>wrkbook.com (contributor)</h3>
                    <Image centered size="big" src={WrkBook} href="http://wrkbook.com" />
                </Container>
            </div>
        )
    }
}