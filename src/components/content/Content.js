import React, { Component } from 'react';

import Lowball from './Lowball';
import Brief from './Brief';
import Default from './Default';
import Detailed from './Detailed';
import Gratuitous from './Gratuitous';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.renderContent = this.renderContent.bind(this);
    }

    renderContent() {
        switch(this.props.activeCircle) {
            case 0:
                return <Lowball />;
            case 1:
                return <Brief />;
            case 2:
                return <Default />;
                break;
            case 3:
                return <Detailed />;
                break;
            case 4:
                return <Gratuitous />;
                break;
        }
    }

    render() {
        return (
            <div className="header-margin">
                {this.renderContent()}
            </div>
        )
    }
}