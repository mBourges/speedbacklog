import React from 'react';
import ReactDOM from 'react-dom';

class AddComment extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        
        this.props.onSubmit(this.getComment());
    }
    
    
    getComment() {
        const comment =  {
            Description: ReactDOM.findDOMNode(this.refs.Description).value,
            Author: ReactDOM.findDOMNode(this.refs.Author).value
        };
        
        this.resetForm();
        
        return comment;
    }
    
    clear(event) {
        event.preventDefault();
        event.stopPropagation();
        
        this.resetForm();
    }
    
    resetForm() {
        ReactDOM.findDOMNode(this.refs.Description).value = '';
        ReactDOM.findDOMNode(this.refs.Author).value = '';
    }
    
  render() {
    return (<form className="ui form" onSubmit={ this.handleSubmit.bind(this) }>
         { this.props.isSaving && <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
        </div> }
        <div className="field">
            <label>Author</label>
            <input type="text" ref="Author" placeholder="Last name, First name" />
        </div>
        <div className="field">
            <label>Description</label>
            <textarea ref="Description"></textarea>
        </div>
        <button type="button" onClick={ this.clear.bind(this) } className="ui black deny button">
            Clear
        </button>
        <button type="submit" className="ui positive right labeled icon button">
            Save
            <i className="checkmark icon"></i>
        </button>
    </form>);
  }
}

export default AddComment;