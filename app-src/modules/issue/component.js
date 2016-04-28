import React from 'react';
import AddComment from '../addComment';

const IssueDetail = ({ issue, errorMessage, isFetching }) => {
    const comments = issue.get('Comments') ? issue.get('Comments').map((comment, index) => {
        return (<div className="event" key={ index }>
            <div className="label">
                <img src="/images/avatar/small/elliot.jpg" />
            </div>
            <div className="content">
                <div className="summary">
                    <a>{ comment.get('Author') }</a>
                    <div className="date">
                        commented on { comment.get('createdAt') }
                    </div>
                </div>
                <div className="extra text">
                    <pre>{ comment.get('Description') }</pre>
                </div>
                <div>
                    <div className="meta">
                        
                    </div>
                </div>
            </div>
        </div>);
    }) : null;
    
    return (<div>
         { errorMessage && <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
                Sorry, error while fetching issues
            </div>
            <p>{ errorMessage }</p>
        </div> }
        { isFetching && <div className="ui segment min-height">
            <div className="ui active dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        </div> }
        { !isFetching && <h3 className="ui top attached header">
           { issue.get('Title') }
        </h3> }
        { !isFetching && <div className="ui attached segment">
            <div className="ui feed">
                { comments }
            </div>
        </div> }
        { !isFetching && <div className="ui bottom attached segment">
            <AddComment issueId={ issue.get('id') } />
        </div> }
    </div>);
};

export default IssueDetail;