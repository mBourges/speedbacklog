import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import AddIssue from '../addIssue';


const IssueList = ({ issues, refresh, errorMessage, isFetching }) => {
    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        refresh();
    };
    
    const issueList = issues.map((issue, index) => {
        const formatedCreatedDate = moment(issue.get('createdAt')).format("MMM Do, YYYY");
        const formatedCreatedTime = moment(issue.get('createdAt')).format("HH:mm:ss");
        
        return (<div className="item" key={ index }>
            <div className="right floated content">
                <div className="description">
                    { formatedCreatedDate } @{ formatedCreatedTime }
                </div>
            </div>
            <div className="right floated content">
                <div className="description">
                    By { issue.get('Author') }
                </div>
            </div>
            <div className="content">
                <Link to={ '/issue/' + issue.get('id') } className="header">{ issue.get('Title') }</Link>
            </div>
        </div>);
    });
    
    return (<div>
         { errorMessage && <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
                Sorry, error while fetching issues
            </div>
            <p>{ errorMessage }</p>
        </div> }
        <div className="ui top attached menu">
            <div className="ui button icon item" onClick={ handleClick }>
                { !isFetching && <i className="repeat icon"></i> }
                { isFetching && <i className="notched circle loading icon"></i> }
            </div>
            <div className="ui item">
                Issues
            </div>
            <div className="right menu">
                <AddIssue />
                <div className="ui right aligned category search item">
                    <div className="ui transparent icon input">
                        <input className="prompt" type="text" placeholder="Search issue..." />
                        <i className="search link icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </div>
        </div>
        <div className="ui bottom attached segment">
            <ul className="ui relaxed divided list">
                { issueList }
            </ul>
        </div>
    </div>);
};

export default IssueList;



