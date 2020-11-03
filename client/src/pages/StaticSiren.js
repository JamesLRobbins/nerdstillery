import React from 'react';
import StaticNavBar from "../components/Static Siren/StaticSirenNavBar/StaticNavBar";
import StaticLogo from '../components/Static Siren/Logo/StaticLogo';
import Music from '../components/Static Siren/Music/Music';
import News from '../components/Static Siren/News/News';
import About from '../components/Static Siren/About/About';
import Contact from '../components/Static Siren/Contact/Contact';


export default class Home extends React.Component {
    constructor (props) {
        super(props)
        this.toggleMusic = this.toggleMusic.bind(this);
        this.toggleNews = this.toggleNews.bind(this);
        this.toggleAbout = this.toggleAbout.bind(this);

        this.state = {
            showMusic: false,
            showVideos: false,
            showNews: false,
            showAbout: true,
        }
    }

        toggleMusic (event) {
            event.preventDefault()
            this.setState({
                showMusic: true,
                showVideos: false,
                showNews: false,
                showAbout: false,
            })
        }

        toggleNews (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: false,
                showNews: true,
                showAbout: false,
            })
        }

        toggleAbout (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: false,
                showNews: false,
                showAbout: true,
            })
        }

    render() {
        const {showMusic} = this.state;
        const {showNews} = this.state;
        const {showAbout} = this.state;
        return( 
        <div>   
            <StaticNavBar
                music = {this.onClick=this.toggleMusic}
                news = {this.onClick=this.toggleNews}
                about = {this.onClick=this.toggleAbout}
                 />
                <div className="ui container">
                    <StaticLogo />

                    { showMusic === true ? <Music /> : "" }
                    { showNews === true ? <News /> : "" }
                    { showAbout === true ? <About /> : "" }
                    
                    <Contact />
                </div>
        </div>
        )
    }
}