import React, { Component } from 'react';
import { Segment, Grid, Icon, Divider } from 'semantic-ui-react';

import Technologies from './Sub/Technologies';
import Portfolio from './Sub/Portfolio';
import Resume from './Sub/Resume';
import Contact from './Sub/Contact';

import '../../../assets/style/content/default.css';

export default class Default extends Component {
    render() {
        return (
            <div className="header-margin">
                <Segment id="landing" inverted padded>
                    <h1 id="name">Jonathan Zhou</h1>
                    <h3>Software Engineer & Web Developer</h3>
                </Segment>

                <Technologies />
                <Portfolio />
                <Resume />
                <Contact />

            </div>
        )
    }
}