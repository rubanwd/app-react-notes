import React from 'react';

import './Note.css';

var Note = React.createClass({
    render: function() {
        var style = { backgroundColor: this.props.color };

        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
});

export default Note;