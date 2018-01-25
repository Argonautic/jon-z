import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import Technologies from './contentComponents/Technologies';
import Portfolio from './contentComponents/Portfolio';
import Resume from './contentComponents/Resume';
import Contact from './contentComponents/Contact';

import '../../../assets/style/content/default.css';

export default class Default extends Component {
    render() {
        return (
            <div>
                <Segment id="landing" inverted padded>
                    <h1 id="name">Jonathan Zhou</h1>
                    <h2>Software Engineer & Web Developer</h2>
                </Segment>

                <Technologies />
                <Portfolio />
                <Resume />
                <Contact />

            </div>
        )
    }
}