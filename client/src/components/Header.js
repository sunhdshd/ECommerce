import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {Link} from 'react-router-dom'

class Header extends Component{
    renderContent(){
        const{isAuthenticated} = this.props.auth;
        console.log(isAuthenticated);
        switch (isAuthenticated){
            case true:
                return(
                    <li key="1" onClick={this.props.signout}>Sign out</li>
                );
            default:
                return (
                    <div>
                        <li key="1"><Link to="/signin">Sign In</Link></li>
                        <li key="2"><Link to="/admin">Admin</Link></li>
                    </div>
                );
        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">EMart</a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/order">Order</Link></li>
                        <li><Link to="/shoppingcart">Shopping Cart</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

//pass a slice of state data to props
const  mapStateToProps = ({auth})=>{
    return {auth : auth};
};

// const mapDispatchToProps = (disptch) => {
//      return {
//          propsName : ()=>dispatch(action)
//      }
// }

export default connect(mapStateToProps,actions)(Header);