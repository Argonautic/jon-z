import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import '../../../assets/style/shared/header.css';

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

    addSwiper() {
        /*let touchstartX = 0;
        let touchstartY = 0;
        let touchendX = 0;
        let touchendY = 0;

        const gesturedZone = document.getElementById('gesturedZone');

        gesturedZone.addEventListener('touchstart', function(event) {
            touchstartX = event.screenX;
            touchstartY = event.screenY;
        }, false);

        gesturedZone.addEventListener('touchend', function(event) {
            touchendX = event.screenX;
            touchendY = event.screenY;
            handleGesture();
        }, false);

        handleGesture() {
            const swiped = 'swiped: ';
            if (touchendX < touchstartX) {
                alert(swiped + 'left!');
            }
            if (touchendX > touchstartX) {
                alert(swiped + 'right!');
            }
            if (touchendY < touchstartY) {
                alert(swiped + 'down!');
            }
            if (touchendY > touchstartY) {
                alert(swiped + 'left!');
            }
            if (touchendY === touchstartY) {
                alert('tap!');
            }
        }*/
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