import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import '../../../assets/style/content/brief.css';

export default class Brief extends Component {
    render() {
        return (
            <Container id="brief">
                <h2>
                    Hello! My name is Jon. I'm a Web Developer and Software Engineer.<br/><br/>
                    I primarily provide full stack web development (especially w/ React) and Python
                    engineering. You can <a href="assets/Resume.pdf">Download my Resume Here </a>
                    and check out <a href="http://officialunderblue.com">A Website I Made Here. </a><br/><br/>
                    If you have any questions, or have need of my tech services, feel free to contact me at
                    jonathan.zhou93@gmail.com.
                </h2>
            </Container>
        )
    }
}