import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import Technologies from './Sub/Technologies'
import Portfolio from './Sub/Portfolio';
import Resume from './Sub/Resume';
import Contact from './Sub/Contact';

import '../../../assets/style/content/detailed.css';

export default class Detailed extends Component {
    render() {
        return (
            <div className="header-margin">
                <Segment.Group id="portrait-segments" inverted padded horizontal>
                    <Segment id="portrait-landing" />
                    <Segment padded inverted>
                        <div id="portrait-info">
                            <h1 id="portrait-name">Jonathan Zhou</h1>
                            <h3>Software Engineer, Web Developer, Musician, Creator</h3>
                            <h4>Based in NYC, Jon does his best to create things that do good (and do well!)</h4>
                        </div>
                    </Segment>
                </Segment.Group>

                <Technologies detailed />
                <Portfolio />
                <Resume />
                <Contact />
            </div>
        )
    }
}