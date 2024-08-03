import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ItemComponent = ({item}) => {
    return <ListGroup.Item>{item}</ListGroup.Item>;
};

export default ItemComponent;