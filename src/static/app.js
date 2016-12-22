import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';

import { authLogoutAndRedirect } from './actions/auth';
// import './styles/main.scss';

import { Icon, Container, Menu } from 'semantic-ui-react';

class App extends React.Component {

    static propTypes = {
        isAuthenticated: React.PropTypes.bool.isRequired,
        children: React.PropTypes.shape().isRequired,
        dispatch: React.PropTypes.func.isRequired,
        pathName: React.PropTypes.string.isRequired
    };

    logout = () => {
        this.props.dispatch(authLogoutAndRedirect());
    };

    goToIndex = () => {
        this.props.dispatch(push('/'));
    };

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };

    goToLogin = () => {
        this.props.dispatch(push('/login'));
    }

    render() {
        // const homeClass = classNames({
        //     active: this.props.pathName === '/'
        // });
        // const protectedClass = classNames({
        //     active: this.props.pathName === '/protected'
        // });
        // const loginClass = classNames({
        //     active: this.props.pathName === '/login'
        // });

        return (
            <div className='app'>
                <Menu>
                    <Menu.Item header>Linklaw</Menu.Item>

                    {this.props.isAuthenticated ? 
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='home'
                                onClick={this.goToIndex}
                                active={this.props.pathName === '/'}
                            >
                                <Icon name='home' />
                                Home
                            </Menu.Item>
                            <Menu.Item
                                name='protedcted'
                                onClick={this.goToProtected}
                                active={this.props.pathName === '/protected'}
                            >
                                Protected
                            </Menu.Item>
                            <Menu.Item
                                name='logout'
                                onClick={this.logout}
                                active={this.props.pathName === '/login'}
                            >
                                Logout
                            </Menu.Item>
                        </Menu.Menu>
                        :
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='home'
                                onClick={this.goToIndex}
                                active={this.props.pathName === '/'}
                            >
                                <Icon name='home' />
                                Home
                            </Menu.Item>
                            <Menu.Item
                                name='login'
                                onClick={this.goToLogin}
                                active={this.props.pathName === '/login'}
                            >
                                Login
                            </Menu.Item>
                        </Menu.Menu>
                    }
                </Menu>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        pathName: ownProps.location.pathname
    };
};

export default connect(mapStateToProps)(App);
export { App as AppNotConnected };
