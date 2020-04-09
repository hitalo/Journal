import React from 'react';
import Container from 'react-bootstrap/Container';

export const JournalContainer = (props) => (
    <Container fluid>
        {props.children}
    </Container>
)