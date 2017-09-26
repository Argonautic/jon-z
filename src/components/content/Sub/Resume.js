import React, { Component } from 'react';
import { Divider, Image, Container, Modal } from 'semantic-ui-react';

import ResumeSrc from '../../../../assets/images/Resume.jpg';
import '../../../../assets/style/content/resume.css';

export default class Resume extends Component {
    render() {
        return (
            <div className="section-margin">
                <Divider /><Divider horizontal><h3>Resume</h3></Divider>
                <br/>
                <Container>
                    <Modal basic trigger={<Image id="resume-modal" size="big" centered src={ResumeSrc} />}>
                        <Modal.Content image>
                            <Image wrapped src={ResumeSrc} />
                        </Modal.Content>
                    </Modal>

                    <br/>
                    <a href="assets/Resume.pdf">Download Resume</a>
                    <br/>
                </Container>
            </div>
        )
    }
}

