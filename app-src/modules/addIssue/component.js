import React from 'react';
import ReactDOM from 'react-dom';

class AddIssue extends React.Component {
    componentDidMount() {
        $(this.modal).modal({
            detachable: false,
            onDeny: () => {},
            onApprove: () => {
                this.props.onSave(this.getIssue(), this.getComment());
            },
            onHidden: () => {
                this.props.onClose();
            }
        }).modal('show');
    }
    
    componentWillUnmount() {
        $(this.modal).modal('hide');
    }
    
    getIssue() {
        return {
            Title: ReactDOM.findDOMNode(this.refs.Title).value,
            Author: ReactDOM.findDOMNode(this.refs.Author).value
        };
    }
    
    getComment() {
        return {
            Description: ReactDOM.findDOMNode(this.refs.Description).value,
            Author: ReactDOM.findDOMNode(this.refs.Author).value
        };
    }
    
  render() {
    return (<div ref={ (n) => this.modal = n } className="ui modal">
        <i className="close icon"></i>
        <div className="header">
            Create a new issue
            { this.props.isSaving && <i className="notched circle loading icon"></i> }
        </div>
        <div className="content">
            <form className="ui form">
                <div className="field">
                    <label>Issue</label>
                    <input type="text" ref="Title" placeholder="Issue short description" />
                </div>
                <div className="field">
                    <label>Author</label>
                    <input type="text" ref="Author" placeholder="Last name, First name" />
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea ref="Description"></textarea>
                </div>
            </form>
        </div>
        
        <div className="actions">
            <div className="ui black deny button">
                Cancel
            </div>
            <button className="ui positive right labeled icon button">
                Save
                <i className="checkmark icon"></i>
            </button>
        </div>
    </div>);
  }
}

export default AddIssue;