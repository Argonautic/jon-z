import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import '../../../assets/style/Shared/footer.css';

export default class Footer extends Component {
    render() {
        return (
            <Menu id="footer" fixed="bottom" compact secondary>
                <Menu.Item href="https://github.com/Argonautic">

                        <Icon name="github" size="large" />

                </Menu.Item>
                <Menu.Item href="https://www.linkedin.com/in/jonzhou1/">

                        <Icon name="linkedin square" link size="large" />

                </Menu.Item>
                <Menu.Item href="mailto:jonathan.zhou93@gmail.com">

                        <Icon name="mail" link size="large" />

                </Menu.Item>
            </Menu>
        )
    }
}