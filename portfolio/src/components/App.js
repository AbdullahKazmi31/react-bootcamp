import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png';

class App extends Component{

    state = {displayBio: false};

    toggleDisplayBtn = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){
        return(
            <div>
            <img src={profile} alt='profile' className='profile' />
            <h1>Hello!</h1>
            <p>My name is Abdullah.</p>
            <Title />
            <p>I'm always looking to working on meaningful projects.</p>
            {
            this.state.displayBio ? (
            <div>
                <p>I live in Lahore.</p>
                <p>My favorite language is JavaScript.</p>
                <p>Besides coding, i also like music.</p>
                <button onClick={this.toggleDisplayBtn}>Show less</button>
            </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBtn}>Read More</button>
            </div>
        )
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
            </div>
        )
    }
}

export default App;