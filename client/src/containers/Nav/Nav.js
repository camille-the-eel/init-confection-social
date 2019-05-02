import React, { Component } from "react"
import { Link } from "react-router-dom"
import AvatarNavbar from "../../components/Avatar/Avatar_Navbar";
import { ReactComponent as SearchButton } from '../../img/searchButton.svg';
import './style.css';

import CurrentUser from "../../AppContext";

class Navbar extends Component {
    // constructor(context, props) {

    // }


    state = {
        pages: []    
    }

    componentDidMount() {
        console.log(this);
        this.mapPages();
    }

    // Mapping the current users pages into 
    // !! Currently not actually changing the state of this component !!
    mapPages = () => {
        const pagesState = {...this.state};
        let context = this.context
        let contextPages = context.pages.map(page => page);
        pagesState.pages = contextPages.map(page => page)
        this.setState({
            pages: contextPages.map(page => page)
        });
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="nav">
                    <div className="nav-wrapper">
                        <Link to="/home" className="app-name left">
                            confection
                        </Link>
                        <ul>
                            {this.context.pages.map(page => (
                                <li className="avatars">
                                    <AvatarNavbar key={page._id}>  
                                        {page}
                                    </AvatarNavbar>
                                </li>
                            ))}
                        </ul>
                        <Link to="/explore" className="right">
                             <SearchButton className="searchButton" alt="searchIcon"/>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

Navbar.contextType = CurrentUser;
export default Navbar;