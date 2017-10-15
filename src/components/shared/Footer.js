import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import '../../../assets/style/shared/footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Menu id="footer" fixed="bottom" compact secondary>
                    <Menu.Item target="_blank" href="https://github.com/Argonautic">
                        <Icon name="github" size="large" />
                    </Menu.Item>
                    <Menu.Item target="_blank" href="https://www.linkedin.com/in/jonzhou1/">
                        <Icon name="linkedin square" link size="large" />
                    </Menu.Item>
                    <Menu.Item href="mailto:jonathan.zhou93@gmail.com">
                        <Icon name="mail" link size="large" />
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}