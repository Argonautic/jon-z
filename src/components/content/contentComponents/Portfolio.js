import React, { Component } from 'react';
import { Divider, Container } from 'semantic-ui-react';

import PortfolioItem from './PortfolioItem';

import { freeTodayDesc, officialUnderblueDesc, rotoprosDesc, geopipeDesc } from '../../../../assets/text/PortfolioText';
import Underblue from '../../../../assets/images/UnderblueSite.jpg';
import FreeToday from '../../../../assets/images/FreeToday.png';
import Rotopros from '../../../../assets/images/Rotopros.png';
import Geopipe from '../../../../assets/images/Geopipe.png';
import '../../../../assets/style/content/portfolio.css';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: ''
        };

        this.renderPortfolioItems = this.renderPortfolioItems.bind(this);
        this.setActiveItem = this.setActiveItem.bind(this);
        this.unsetActiveItem = this.unsetActiveItem.bind(this);
    }

    renderPortfolioItems() {
        const portfolioItems = [
            {
                name: 'Geopipe',
                src: Geopipe,
                siteHref: 'http://geopi.pe',
                contentText: geopipeDesc
            },
            {
                name: 'Rotopros',
                src: Rotopros,
                siteHref: 'http://rotopros.com',
                contentText: rotoprosDesc
            },
            {
                name: 'FreeToday',
                src: FreeToday,
                siteHref: 'https://freetoday.herokuapp.com',
                gitHref: 'http://github.com/Argonautic/FreeTodayMeteor',
                contentText: freeTodayDesc
            },
            {
                name: 'OfficialUnderblue',
                src: Underblue,
                siteHref: 'http://officialunderblue.com',
                gitHref: 'http://github.com/Argonautic/OfficialUnderblue',
                contentText: officialUnderblueDesc
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
                    contentText={item.contentText}
                    active={this.state.activeItem === item.name}

                    handleMouseEnter={this.setActiveItem}
                    handleMouseLeave={this.unsetActiveItem}
                />
                <br/><br/>
            </Container>
        });
    }

    setActiveItem(newActive) {
        this.setState({ activeItem: newActive });
    }

    unsetActiveItem() {
        this.setState({ activeItem: '' });
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