import React from 'react';
import IssueDetail from '../../modules/issue';

class IssueDetailLayout extends React.Component {
    componentDidMount() {
        console.log('IssueDetailLayout MOUNTED', this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('IssueDetailLayout RECEIVED PROPS', this.props, nextProps);
    }
    
    render() {
        return (<IssueDetail />);
    }
}

export default IssueDetailLayout;