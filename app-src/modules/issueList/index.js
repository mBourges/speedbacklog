import React from 'react';
import { connect } from 'react-redux';
import IssueListComponent from './component';
import { fetchIssues } from './actions';

class IssueList extends React.Component {
    componentWillMount() {
        this.props.getIssues();
    }
    
    render() {
        return (<IssueListComponent
            issues={ this.props.issues }
            isFetching={ this.props.isFetching }
        />);
    }
}


function mapStateToProps(state) {
    return {
        issues: state.issueList.get('issues'),
        isFetching: state.issueList.get('isFetching')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getIssues: () => {
            dispatch(fetchIssues());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);