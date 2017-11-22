import React, { Component } from 'react';

import Technologies from './contentComponents/Technologies'
import Portfolio from './contentComponents/Portfolio';
import Resume from './contentComponents/Resume';
import Recommendations from "./contentComponents/Recommendations";
import FAQ from './contentComponents/FAQ';
import Contact from './contentComponents/Contact';

import '../../../assets/style/content/detailed.css';

export default class Detailed extends Component {
    render() {
        return (
            <div>
                <div id="detailed-intro">
                    <div id="portrait-landing" />
                    <div id="portrait-info">
                        <h1 id="portrait-name">Jonathan Zhou</h1>
                        <h2>Software Engineer, Web Developer, Musician, and Creator. Strives to
                          make things that do good (and do well!)</h2>
                    </div>
                </div>

                <Technologies detailed />
                <Portfolio />
                <Resume />
                <Recommendations />
                <FAQ />
                <Contact detailed />
            </div>
        )
    }
}