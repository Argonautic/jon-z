import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react';

import ResumeLink from '../../../assets/Resume.pdf';

import '../../../assets/style/content/brief.css';

export default class Brief extends Component {
    render() {
        return (
            <Container id="brief">
                <h2>
                    Hello! My name is Jon. I'm a Software Engineer and Web Developer.<br/><br/>
                    I primarily provide full stack web development (especially w/ React) and Python
                    engineering. You can <a target="_blank" href={ResumeLink}>Download my Resume Here </a>
                    and check out <a target="_blank" href="http://officialunderblue.com">A Website I Made Here. </a><br/><br/>
                    If you have any questions, or have need of my tech services, feel free to contact me at
                    jonathan.zhou93@gmail.com, or check out my <a target="_blank" href="https://www.linkedin.com/in/jonzhou1/">
                    LinkedIn.</a>
                </h2>
                <Icon name="computer" size="huge" />
            </Container>
        )
    }
}