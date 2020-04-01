import React from 'react';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import devgrub from '../images/purple.jpg';
import youtube from '../images/wYHxAZ.jpg';
import evverest from '../images/vs2yQY.jpg';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Lisa Lux',
                    subTitle: 'Youtube Channel',
                    imgSrc: youtube,
                    link: 'https://youtube.com/channel/UCxSITxL2JbF2290GCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: evverest,
                    link: 'https://github.com/garettlove8/evverest',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;