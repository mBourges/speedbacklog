import React from 'react';

const IssueDetail = ({ issue, errorMessage, isFetching }) => {
    /*const issueList = issues.map((issue, index) => {
        return (<div className="item" key={ index }>
            <div className="right floated content">
                <div className="description">@{ issue.get('createdAt') } By { issue.get('Author') }</div>
            </div>
            <div className="content">
                <a className="header">{ issue.get('Title') }</a>
            </div>
        </div>);
    });*/
    console.log('Issue', issue)
    return (<div>
         { errorMessage && <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
                Sorry, error while fetching issues
            </div>
            <p>{ errorMessage }</p>
        </div> }
        <div className="ui top attached menu">
           
        </div>
        <div className="ui bottom attached segment">
            <p></p>
        </div>
    </div>);
};

export default IssueDetail;