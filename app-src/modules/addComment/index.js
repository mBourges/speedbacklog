import React from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import AddComment from './component';

function mapStateToProps(state) {
  return {
     isSaving: state.addComment.get('isSaving'),
     errorMessage: state.addComment.get('errorMessage')
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
      onSubmit: (comment) => { dispatch(addComment(ownProps.issueId, comment)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);