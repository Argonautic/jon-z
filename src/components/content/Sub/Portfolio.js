import React, { Component } from 'react';
import { Divider, Container } from 'semantic-ui-react';

import PortfolioItem from './PortfolioItem';

import { freeTodayDesc, officialUnderblueDesc } from '../../../../assets/text/PortfolioText';
import Underblue from '../../../../assets/images/UnderblueSite.jpg';
import FreeToday from '../../../../assets/images/FreeToday.png';
import '../../../../assets/style/content/portfolio.css';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: ''
        };

        this.renderPortfolioItems = this.renderPortfolioItems.bind(this);
        this.setActiveItem = this.setActiveItem.bind(this);
        this.unsetActiveItem = this.unsetActiveItem.bind(this);
    }

    renderPortfolioItems() {
        const portfolioItems = [
            {
                name: 'FreeToday',
                src: FreeToday,
                siteHref: 'https://freetoday.herokuapp.com',
                gitHref: 'http://github.com/Argonautic/FreeTodayMeteor',
                content: freeTodayDesc
            },
            {
                name: 'OfficialUnderblue',
                src: Underblue,
                siteHref: 'http://officialunderblue.com',
                gitHref: 'http://github.com/Argonautic/OfficialUnderblue',
                content: officialUnderblueDesc
            }
        ];

        return portfolioItems.map(item => {
            return <Container key={item.name}>
                <a target="_blank" href={item.siteHref}><h3>{item.name}</h3></a><br/><br/>
                <PortfolioItem
                    name={item.name}
                    src={item.src}
                    siteHref={item.siteHref}
                    gitHref={item.gitHref}
                    content={item.content}
                    active={this.state.active === item.name}

                    handleMouseEnter={this.setActiveItem}
                    handleMouseLeave={this.unsetActiveItem}
                />
                <br/><br/>
            </Container>
        });
    }

    setActiveItem(newActive) {
        this.setState({ active: newActive });
    }

    unsetActiveItem() {
        this.setState({ active: '' });
    }

    render() {
        return (
            <div id="portfolio" className="section-margin">
                <Divider /><Divider className="section-divider" horizontal><h3>Portfolio</h3></Divider>
                {this.renderPortfolioItems()}
            </div>
        )
    }
}