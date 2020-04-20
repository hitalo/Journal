import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateToHTML } from 'draft-js-export-html';
import styled from 'styled-components';
import axios from 'axios';
import { Col } from 'react-bootstrap';


class JournalEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            html: ""
        }
    }

    onEditorStateChange = (editorState) => {
        // console.log(editorState.getCurrentContent().getPlainText('\u0001'))
        // const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
        // const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
        this.setState({ editorState, html: stateToHTML(editorState.getCurrentContent()) });
    }

    createPDF = () => {
        axios.post('/projects/create-pdf', { html: this.state.html }).catch(err => console.log("can't create pdf " + err));
    }

    render() {
        return (
            <Styles>
                <Row><Col md={12}>
                    <Button
                        variant='primary'
                        onClick={this.createPDF}
                        className='create-pdf-button'
                    >
                        Create PDF
                </Button>
                </Col></Row>
                <Row><Col md={12}>
                    <Editor
                        editorState={this.state.editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="editor-wrapper"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Col></Row>
                <Row><Col md={12}>
                    {
                        this.state.html
                    }
                </Col></Row>
            </Styles>
        );
    }
}

const Styles = styled.div`

.create-pdf-button {
    margin: 10px;
    margin-right: 0px;
    float: right;
}

.editor-wrapper {
    border: 1px solid gray;
}

`;

export default JournalEditor;