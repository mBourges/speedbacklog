import React from 'react';
import { connect } from 'react-redux';
import IssueComponent from './component';
import { fetchIssue } from './actions';

class IssueDetail extends React.Component {
    componentWillMount() {
        if(this.props.issueId) {
            this.props.getIssue(this.props.issueId);
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props.issueId !== nextProps.issueId) {
            this.props.getIssue(nextProps.issueId);
        }
    }
    
    render() {
        return (<IssueComponent
            issue={ this.props.issue }
            isFetching={ this.props.isFetching }
            errorMessage={ this.props.errorMessage }
        />);
    }
}


function mapStateToProps(state) {
    return {
        issue: state.issue.get('issue'),
        isFetching: state.issue.get('isFetching'),
        errorMessage: state.issue.get('errorMessage')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getIssue: (id) => {
            dispatch(fetchIssue(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueDetail);