import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import Technologies from './Sub/Technologies'
import PortfolioDetailed from './Sub/PortfolioDetailed';
import Resume from './Sub/Resume';
import FAQ from './Sub/FAQ';
import Contact from './Sub/Contact';

import '../../../assets/style/content/detailed.css';

export default class Detailed extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="portrait-landing" />
                    <div id="portrait-info">
                        <h1 id="portrait-name">Jonathan Zhou</h1>
                        <h3>Software Engineer, Web Developer, Musician, and Creator. Does his best to
                          make things that do good (and do well!)</h3>
                    </div>
                </div>

                <Technologies detailed />
                <PortfolioDetailed />
                <Resume />
                <FAQ />
                <Contact detailed />
            </div>
        )
    }
}