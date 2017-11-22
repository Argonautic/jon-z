import React, { Component } from 'react';
import { Image, Dimmer, Button } from 'semantic-ui-react';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    handleMouseEnter() {
        this.props.handleMouseEnter(this.props.name);
    }

    handleTouchStart() {
        this.props.handleTouchStart();
    }

    renderContent() {
        return <div id="content">
                <p>{this.props.content}</p>
                <Button.Group>
                    <Button primary content="See Website" target="_blank" href={this.props.siteHref} />
                    {this.props.gitHref &&
                        <Button color="teal" content="See Git Repo" target="_blank" href={this.props.gitHref} />
                    }
                </Button.Group>
            </div>
    }

    render() {
        const { active } = this.props;
        const content = this.renderContent();

        return (
            <Dimmer.Dimmable
                as={Image}
                centered
                size="big"
                src={this.props.src}
                target="_blank"
                href={this.props.siteHref}

                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
                onTouchStart={this.handleMouseEnter}
                dimmed={active}
                dimmer={{ active, content }}
            />
        )
    }
}


/**/