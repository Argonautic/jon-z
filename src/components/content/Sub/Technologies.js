import React, { Component } from 'react';
import { Grid, List, Image } from 'semantic-ui-react';

import ReduxImage from '../../../../assets/icons/reduxImage.png';
import WebpackImage from '../../../../assets/icons/webpackImage.png';
import jQueryImage from '../../../../assets/icons/jqueryImage.png';
import MongoImage from '../../../../assets/icons/mongoImage.jpg';
import SemanticImage from '../../../../assets/icons/semanticImage.png';
import BootstrapImage from '../../../../assets/icons/bootstrapImage.png';
import MaterializeImage from '../../../../assets/icons/materializeImage.png';
import PyTorchImage from '../../../../assets/icons/pytorchImage.png';
import '../../../../assets/style/content/technologies.css';

export default class Resume extends Component {
    constructor(props) {
        super(props);

        this.renderFirstRow = this.renderFirstRow.bind(this);
        this.renderSecondRow = this.renderSecondRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    renderFirstRow() {
        const firstRow = [
            { name: "Django", iconClass: "devicon-django-plain" },
            { name: "Node", iconClass: "devicon-nodejs-plain" },
            { name: "Meteor", iconClass: "devicon-meteor-plain" },
            { name: "React", iconClass: "devicon-react-original" },
        ];

        return this.renderRow(firstRow)
    }

    renderSecondRow() {
        const secondRow = [
            { name: "Python", iconClass: "devicon-python-plain" },
            { name: "Java", iconClass: "devicon-java-plain" },
        ];

        return this.renderRow(secondRow)
    }

    renderRow(row) {
        return row.map(item => {
            return <Grid.Column key={item.name}>
                <i className={this.props.detailed ? item.iconClass + " colored" : item.iconClass } />
                <br/>
                <h4>{item.name}</h4>
            </Grid.Column>
        });
    }

    renderMoreDetails() {
        const icons = [
            { name: "Redux", src: ReduxImage },
            { name: "Webpack", src: WebpackImage },
            { name: "jQuery", src: jQueryImage },
            { name: "MongoDB", src: MongoImage },
            { name: "SemanticUI", src: SemanticImage },
            { name: "Bootstrap", src: BootstrapImage },
            { name: "Materialize", src: MaterializeImage },
            { name: "PyTorch", src: PyTorchImage }
        ];

        return (
            <div id="more-details">
                <h3>Other Technologies</h3>
                <List horizontal>
                {icons.map(icon => {
                    return <List.Item key={icon.name}>
                        <Image src={icon.src} height="40" width="40" />
                        <List.Content>
                            {icon.name}
                        </List.Content>
                    </List.Item>})}
                </List>
            </div>
        )
    }

    render() {
        return (
            <div className="section-margin">
                <h1>Web Development</h1>
                <Grid padded columns={4}>
                    <Grid.Row>
                        {this.renderFirstRow()}
                    </Grid.Row>
                </Grid>
                <br/>
                <h1>Software Engineering</h1>
                <Grid padded columns={2}>
                    <Grid.Row>
                        {this.renderSecondRow()}
                    </Grid.Row>
                </Grid>

                {this.props.detailed && this.renderMoreDetails()}
            </div>
        )
    }
}

