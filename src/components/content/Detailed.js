import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import Technologies from './Sub/Technologies'
import Portfolio from './Sub/Portfolio';
import Resume from './Sub/Resume';
import FAQ from './Sub/FAQ';
import Contact from './Sub/Contact';

import '../../../assets/style/content/detailed.css';

export default class Detailed extends Component {
    render() {
        return (
            <div>
                <div id="detailed-intro">
                    <div id="portrait-landing" />
                    <div id="portrait-info">
                        <h1 id="portrait-name">Jonathan Zhou</h1>
                        <h2>Web Developer, Software Engineer, Musician, and Creator. Strives to
                          make things that do good (and do well!)</h2>
                    </div>
                </div>

                <Technologies detailed />
                <Portfolio />
                <Resume />
                <FAQ />
                <Contact detailed />
            </div>
        )
    }
}