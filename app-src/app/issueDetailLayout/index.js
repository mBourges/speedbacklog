import React from 'react';
import IssueDetail from '../../modules/issue';

class IssueDetailLayout extends React.Component {
    componentDidMount() {
        console.log('IssueDetailLayout MOUNTED', this.props.params.issueId);
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('IssueDetailLayout RECEIVED PROPS', this.props.params.issueId);
    }
    
    render() {
        return (<IssueDetail />);
    }
}

export default IssueDetailLayout;