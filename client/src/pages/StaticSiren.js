import React from 'react';
import StaticNavBar from "../components/Static Siren/StaticSirenNavBar/StaticNavBar";
import StaticLogo from '../components/Static Siren/Logo/StaticLogo';
import Music from '../components/Static Siren/Music/Music';
import Videos from '../components/Static Siren/Videos/Videos';
import News from '../components/Static Siren/News/News';
import About from '../components/Static Siren/About/About';
import Contact from '../components/Static Siren/Contact/Contact';


export default class Home extends React.Component {
    constructor (props) {
        super(props)
        this.toggleMusic = this.toggleMusic.bind(this);
        this.toggleVideos = this.toggleVideos.bind(this);
        this.toggleNews = this.toggleNews.bind(this);
        this.toggleAbout = this.toggleAbout.bind(this);
        this.toggleContact = this.toggleContact.bind(this);

        this.state = {
            showMusic: false,
            showVideos: false,
            showNews: false,
            showAbout: true,
            showContact: false
        }
    }

        toggleMusic (event) {
            event.preventDefault()
            this.setState({
                showMusic: true,
                showVideos: false,
                showNews: false,
                showAbout: false,
                showContact: false
            })
        }

        toggleVideos (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: true,
                showNews: false,
                showAbout: false,
                showContact: false
            })
        }

        toggleNews (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: false,
                showNews: true,
                showAbout: false,
                showContact: false
            })
        }

        toggleAbout (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: false,
                showNews: false,
                showAbout: true,
                showContact: false
            })
        }

        toggleContact (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: false,
                showNews: false,
                showAbout: false,
                showContact: true
            })
        }

    render() {
        const {showMusic} = this.state;
        const {showVideos} = this.state;
        const {showNews} = this.state;
        const {showAbout} = this.state;
        const {showContact} = this.state;
        return( 
        <div>   
            <StaticNavBar
                music = {this.onClick=this.toggleMusic}
                videos = {this.onClick=this.toggleVideos}
                news = {this.onClick=this.toggleNews}
                about = {this.onClick=this.toggleAbout}
                contact = {this.onClick=this.toggleContact}
                 />
                <div className="ui container">
                    <StaticLogo />

                    { showMusic === true ? <Music /> : "" }
                    { showVideos === true ? <Videos /> : ""}
                    { showNews === true ? <News /> : "" }
                    { showAbout === true ? <About /> : "" }
                    { showContact === true ? <Contact /> : "" }
                </div>
        </div>
        )
    }
}