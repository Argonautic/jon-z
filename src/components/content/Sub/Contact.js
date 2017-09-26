import React, { Component } from 'react';
import { Divider, Icon } from 'semantic-ui-react';

import '../../../../assets/style/content/contact.css';

export default class Resume extends Component {
    renderPowered() {
        return (
            <div>
                <p id="powered">Powered By Me</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div id="contact" className="section-margin">
                    <Divider /><Divider className="section-divider" horizontal><h3>Contact</h3></Divider>
                    <div>
                        <a href="https://www.linkedin.com/in/jonzhou1/">
                            <Icon name="linkedin square" link size="big" />
                        </a>
                        <a href="mailto:jonathan.zhou93@gmail.com">
                            <Icon name="mail" link size="big" />
                        </a>
                    </div>
                </div>
                {this.props.detailed && this.renderPowered()}
            </div>
        )
    }
}

