import React from 'react';
import { connect } from 'react-redux';
import { openAddModal, closeAddModal, addIssues } from './actions';
import AddIssue from './component';

const AddIssueContainer = ({ show, open, close, onSave, isSaving, errorMessage }) => {
  return (<div>
        <div className="ui button icon item" onClick={ open }>
            <i className="plus icon"></i>
        </div>
    { show ? <AddIssue
        onClose={ close }
        onSave={ onSave }
    /> : null}
  </div>);
};

function mapStateToProps(state) {
  return {
     show: state.addIssue.get('show'),
     isSaving: state.addIssue.get('isSaving'),
     errorMessage: state.addIssue.get('errorMessage')
  };
}

function mapDispatchToProps(dispatch) {
  return {
      open: () => { dispatch(openAddModal()); },
      onSave: (issue, comment) => { dispatch(addIssues(issue, comment)) }, 
      close: () => { dispatch(closeAddModal()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIssueContainer);