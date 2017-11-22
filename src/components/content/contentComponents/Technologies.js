import React, { Component } from 'react';
import { Grid, List, Image } from 'semantic-ui-react';

import ReduxImage from '../../../../assets/icons/reduxImage.png';
import WebpackImage from '../../../../assets/icons/webpackImage.png';
import jQueryImage from '../../../../assets/icons/jqueryImage.png';
import MongoImage from '../../../../assets/icons/mongoImage.jpg';
import PostgresImage from '../../../../assets/icons/postgresImage.png'
import SemanticImage from '../../../../assets/icons/semanticImage.png';
import BootstrapImage from '../../../../assets/icons/bootstrapImage.png';
import MaterializeImage from '../../../../assets/icons/materializeImage.png';
import AWSImage from '../../../../assets/icons/aws.png';
import '../../../../assets/style/content/technologies.css';

export default class Resume extends Component {
    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount() {
        this.firstRow = [
            { name: "Django", iconClass: "devicon-django-plain" },
            { name: "Express", iconClass: "devicon-express-original-wordmark"},
            { name: "Meteor", iconClass: "devicon-meteor-plain" },
            { name: "React", iconClass: "devicon-react-original" },
            { name: "Angular", iconClass: "devicon-angularjs-plain" }
        ];

        this.secondRow = [
            { name: "Python", iconClass: "devicon-python-plain" },
            { name: "Node", iconClass: "devicon-nodejs-plain" },
            { name: "Java", iconClass: "devicon-java-plain" },
        ];

        this.icons = [
            { name: "Redux", src: ReduxImage },
            { name: "Webpack", src: WebpackImage },
            { name: "jQuery", src: jQueryImage },
            { name: "MongoDB", src: MongoImage },
            { name: "Postgres", src: PostgresImage },
            { name: "SemanticUI", src: SemanticImage },
            { name: "Bootstrap", src: BootstrapImage },
            { name: "Materialize", src: MaterializeImage },
            { name: "AWS", src: AWSImage }
        ];
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
        return (
            <div id="more-details">
                <h3>Other Technologies</h3>
                <List horizontal>
                {this.icons.map(icon => {
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
                <Grid padded columns={this.firstRow.length}>
                    <Grid.Row>
                        {this.renderRow(this.firstRow)}
                    </Grid.Row>
                </Grid>
                <br/>
                <h1>Software Engineering</h1>
                <Grid padded columns={this.secondRow.length}>
                    <Grid.Row>
                        {this.renderRow(this.secondRow)}
                    </Grid.Row>
                </Grid>

                {this.props.detailed && this.renderMoreDetails()}
            </div>
        )
    }
}

