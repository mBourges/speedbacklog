import React from 'react';
import IssueDetail from '../../modules/issue';

class IssueDetailLayout extends React.Component {
    render() {
        return (<IssueDetail
            issueId={ this.props.params.id }
        />);
    }
}

export default IssueDetailLayout;