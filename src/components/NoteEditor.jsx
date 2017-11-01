
import React from 'react';
import ColorPicker from './ColorPicker.jsx';

import './NoteEditor.css';


const NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            color: '#2ECC71'
        };
    },

    handleTextChange: function(event) {
        this.setState({ text: event.target.value });
    },

    handleNoteAdd: function() {
        let newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
    },

    handleColor: function(event) {
        this.setState({ color: event.target.value });
    },


    render: function() {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>

                <ColorPicker colorPick={this.handleColor}></ColorPicker>
                
            </div>
        );
    }
});


export default NoteEditor;