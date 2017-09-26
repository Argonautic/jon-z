import React, { Component } from 'react';
import { Divider, Icon, Accordion } from 'semantic-ui-react';

import { contactText, commissionsText, studyText, commonText, favoriteLanguageText, howLongText } from '../../../../assets/text/FAQtext';
import '../../../../assets/style/content/FAQ.css';

export default class FAQ extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        };

        this.renderAccordion = this.renderAccordion.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    renderAccordion() {
        const panels = [
            { id: 0, title: "What kind of development do you do?", content: commonText },
            { id: 1, title: "How long have you been programming?", content: howLongText },
            { id: 2, title: "Did you go to school for computer science?", content: studyText },
            { id: 3, title: "What's the best way to get in touch with you?", content: contactText },
            { id: 4, title: "Do you take contracts/commissions?", content: commissionsText},
            { id: 5, title: "What's your favorite programming language?", content: favoriteLanguageText }
        ];

        return <Accordion id="accordion" panels={panels} styled fluid />

        /*return panels.map(item => {
            return <div>
                <Accordion.Title key={item.id} active={activeIndex = item.id} index={item.id} onClick={this.handleClick}>
                    <Icon name="dropdown" />
                    {item.title}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === item.id}>
                    <p>{item.content}</p>
                </Accordion.Content>
            </div>

        });*/
    }

    handleClick() {

    }

    render() {
        return (
            <div className="section-margin">
                <Divider /><Divider className="section-divider" horizontal><h3>FAQ</h3></Divider>
                {this.renderAccordion()}
            </div>
        )
    }
}

