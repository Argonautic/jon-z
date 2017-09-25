import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import '../../../assets/style/Shared/header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.renderCircles = this.renderCircles.bind(this);
        this.less = this.less.bind(this);
        this.more = this.more.bind(this);
    }

    renderCircles() {
        return [0, 1, 2, 3, 4].map((i) => {
            return <Menu.Item key={i} onClick={() => this.props.onCircleClick(i)}>
                <Icon size="large" name={this.props.activeCircle === i ? "circle" : "circle thin"} />
            </Menu.Item>
        });
    }

    less() {
        if (this.props.activeCircle > 0) {
            this.props.onCircleClick(this.props.activeCircle - 1);
        }
    }

    more() {
        if (this.props.activeCircle < 4) {
            this.props.onCircleClick(this.props.activeCircle + 1);
        }
    }

    render() {
        return (
            <Menu id="header" borderless widths="8" fixed="top">
                <Menu.Item onClick={this.less}>
                    Fewer Deets
                </Menu.Item>
                {this.renderCircles()}
                <Menu.Item onClick={this.more}>
                    More Deets
                </Menu.Item>
            </Menu>
        );
    }
}