import React from 'react';

const IssueList = ({ issues }) => {
    const issueList = issues.map((issue, index) => {
        return (<div className="item" key={ index }>
            <div className="right floated content">
                <div className="description">@{ issue.get('CreatedDate') } By { issue.get('Author') }</div>
            </div>
            <div className="content">
                <a className="header">{ issue.get('Title') }</a>
            </div>
        </div>);
    });
    
    return (<div>
        <h2 className="ui header">
            <i className="plug icon"></i>
            <div className="content">
                Issues
            </div>
        </h2>
        <ul className="ui relaxed divided list">
            { issueList }
        </ul>
    </div>);
};

export default IssueList;