import React, { Component } from 'react';
import { Container, Card, Image, Divider, Button } from 'semantic-ui-react';

import { dannaRecommendation, dinaRecommendation, yukkeeRecommendation } from '../../../../assets/text/RecommendationText';
import DannaPicture from '../../../../assets/images/DannaPicture.jpg';
import DinaPicture from '../../../../assets/images/DinaPicture.jpg';
import YukkeePicture from '../../../../assets/images/YukkeePicture.jpg';
import '../../../../assets/style/content/recommendations.css';

export default class Recommendations extends Component {
    constructor(props) {
        super(props);

        this.renderCards = this.renderCards.bind(this);
    }

    renderCards() {
        const recommendations = [
            {
                name: 'DannaRec',
                writer: 'Danna Hendrickson',
                linkedIn: 'https://www.linkedin.com/in/dannafhendrickson/',
                image: DannaPicture,
                company: 'Argyle Executive Forum',
                content: dannaRecommendation
            },
            {
                name: 'DinaRec',
                writer: 'Dina Jordan',
                linkedIn: 'https://www.linkedin.com/in/dina-jordan-87458117/',
                image: DinaPicture,
                company: 'Argyle Executive Forum',
                content: dinaRecommendation
            },
            {
                name: 'YukkeeRec',
                writer: 'Yuk Kee Chang',
                linkedIn: 'https://www.linkedin.com/in/yuk-kee-chang-05920713a/',
                image: YukkeePicture,
                company: 'WrkBook',
                content: yukkeeRecommendation
            }
        ];

        return recommendations.map(recommendation => {
            return <Card key={recommendation.name} centered>
                <Card.Content>
                    <Image floated="right" size="mini" src={recommendation.image} />
                    <Card.Header><a target="_blank" href={recommendation.linkedIn}>{recommendation.writer}</a></Card.Header>
                    <Card.Meta>at {recommendation.company}</Card.Meta>
                    <Card.Description>
                        <p>{recommendation.content}</p>
                        <Button
                            color="linkedin"
                            icon='linkedin'
                            content="LinkedIn"
                            target="_blank"
                            href={recommendation.linkedIn}
                        />
                        <br/><br/>
                    </Card.Description>
                </Card.Content>
            </Card>
        });
    }

    render() {
        return (
            <Container className="section-margin">
                <Divider /><Divider className="section-divider" horizontal><h3>Recommendations</h3></Divider>
                <Card.Group stackable itemsPerRow={3}>
                    {this.renderCards()}
                </Card.Group>
            </Container>
        );
    }
}