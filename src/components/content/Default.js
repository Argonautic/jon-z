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
            <div>
                <Segment id="landing" inverted padded>
                    <h1 id="name">Jonathan Zhou</h1>
                    <h2>Web Developer & Software Engineer</h2>
                </Segment>

                <Technologies />
                <Portfolio />
                <Resume />
                <Contact />

            </div>
        )
    }
}