import React, { Component } from 'react';

import Header from './shared/Header';
import Content from './content/Content';
import Footer from './shared/Footer';
import Filler from './Filler';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeCircle: 2
        };

        this.changeActiveCircle = this.changeActiveCircle.bind(this);
    }

    changeActiveCircle(i) {
        this.setState({ activeCircle: i });
        scroll(0,0);
    }

    render() {
        return (
            <div>
                <Header activeCircle={this.state.activeCircle} onCircleClick={this.changeActiveCircle} />
                <Content activeCircle={this.state.activeCircle} />
                <Footer />
            </div>
        )
    }
}