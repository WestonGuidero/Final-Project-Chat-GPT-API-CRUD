import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemComponent from './ItemComponent';

const ListComponent = ({ items }) => {
    return (
        <ListGroup>
            {items.map((item, index) => (
                <ItemComponent key={index} item={item} />
            ))}
        </ListGroup>
    );
};

export default ListComponent;
