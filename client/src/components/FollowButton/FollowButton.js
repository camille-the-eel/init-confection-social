import React, { Component } from 'react';
import followButton from '../../img/followButton.svg';
import followButtonClicked from '../../img/followButtonClicked.svg';

import CurrentUser from "../../AppContext";
import API from "../../utils/API";

class FollowButton extends Component {
    constructor() {
        super()
        this.state = {
            isFollowing: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        console.log(this);
    }

    // Function to add current page to the user's active page's follow list
    addFollow = page_id => {
        
        const followData = {
            userPage_id: this.context.pages[0]._id,
            pageToFollow: page_id
        }
        console.log(followData)
        API.followPage(followData)
            .then(() => {
                this.setState({ isFollowing: true })
            })
            .catch(err => console.log(err));

    }

    
    // Function to remove current page to the user's active page's follow list
    unFollow = page_id => {
        
        const unFollowData = {
            userPage_id: this.context.pages[0]._id,
            pageToFollow: page_id
        }
        console.log(unFollowData)

        this.setState({ isFollowing: false })
    }

    // Handles logic whether to follow or unfollow current page
    handleClick = event => {
        event.preventDefault()

        if (this.state.isFollowing) {
            this.unFollow(this.props.page_id)
        } else {
            this.addFollow(this.props.page_id)
        }
    };

    render() {
        return <img
                src={this.state.isFollowing ? followButtonClicked : followButton} 
                className="followButton" 
                alt="follow button"
                onClick={this.handleClick} 
                />;
    }
}

FollowButton.contextType = CurrentUser; 
export default FollowButton;