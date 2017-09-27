import React, { Component } from 'react';

import '../../../assets/style/content/gratuitous.css';

export default class Gratuitous extends Component {
    render() {
        return (
            <div>
                <iframe id="wikipedia" src="https://en.wikipedia.org/wiki/Programmer" />
            </div>
        )
    }
}