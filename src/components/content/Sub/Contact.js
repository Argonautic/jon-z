import React, { Component } from 'react';
import { Divider, Icon } from 'semantic-ui-react';

import '../../../../assets/style/content/contact.css';

export default class Resume extends Component {
    render() {
        return (
            <div>
                <div id="contact" className="section-margin">
                    <Divider /><Divider className="section-divider" horizontal><h3>Contact</h3></Divider>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/jonzhou1/">
                            <Icon name="linkedin square" link size="big" />
                        </a>
                        <a target="_blank" href="mailto:jonathan.zhou93@gmail.com">
                            <Icon name="mail" link size="big" />
                        </a>
                    </div>
                </div>
                <div>
                    <p id="powered">Powered By Me</p>
                </div>
            </div>
        )
    }
}

