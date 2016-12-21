import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './style.scss';
import reactLogo from './images/react-logo.png';
import reduxLogo from './images/redux-logo.png';

import { Container, Image, Header, Message } from 'semantic-ui-react';

class HomeView extends React.Component {

    static propTypes = {
        statusText: React.PropTypes.string,
        userName: React.PropTypes.string
    };

    render() {
        return (
            <Container>
                <div className='margin-top-medium text-center'>
                    <Image src={reactLogo} alt="ReactJS" />
                    <Image src={reduxLogo} alt="Redux" />
                </div>
                <div className='text-center'>
                    <Header as='h1'>Django React Redux Demo</Header>
                    <Header as='h4'>Hello, {this.props.userName || 'guest'}.</Header>
                </div>
                <div className='margin-top-medium text-center'>
                    <p>Attempt to access some <Link to='/protected'><b>protected content</b></Link>.</p>
                </div>
                <div className='margin-top-medium'>
                    {this.props.statusText ?
                        <Message info>
                            {this.props.statusText}
                        </Message>
                        :
                        null
                    }
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default connect(mapStateToProps)(HomeView);
export { HomeView as HomeViewNotConnected };
