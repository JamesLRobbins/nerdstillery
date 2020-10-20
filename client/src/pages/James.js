import React from 'react';
import JamesNavBar from "../components/James Robbins/JamesNavBar/JamesNavBar";
import JamesLogo from '../components/James Robbins/Logo/JamesLogo';
import Music from '../components/James Robbins/Music/Music';
import Videos from '../components/James Robbins/Videos/Videos';
import News from '../components/James Robbins/News/News';
import About from '../components/James Robbins/About/About';
import Contact from '../components/James Robbins/Contact/Contact';


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
            <JamesNavBar
                music = {this.onClick=this.toggleMusic}
                videos = {this.onClick=this.toggleVideos}
                news = {this.onClick=this.toggleNews}
                about = {this.onClick=this.toggleAbout}
                contact = {this.onClick=this.toggleContact}
                 />
                <div className="ui container">
                    <JamesLogo />

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