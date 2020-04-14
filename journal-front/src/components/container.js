import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

export const JournalContainer = (props) => (
    <Styles>
        <Container fluid className="journal-container">
            {props.children}
        </Container>
    </Styles>
)

const Styles = styled.div`

.journal-container {
    padding: 0px;
}

`;