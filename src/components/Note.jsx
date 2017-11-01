import React from 'react';

import './Note.css';

const Note = React.createClass({
    render: function() {
        let style = { backgroundColor: this.props.color };

        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
});

export default Note;