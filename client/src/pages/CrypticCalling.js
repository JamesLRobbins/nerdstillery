import React from 'react';
import { Button } from 'semantic-ui-react';
import CrypticNavBar from "../components/Cryptic Calling/CrypticNavBar/CrypticNavBar";
import CrypticLogo from '../components/Cryptic Calling/Logo/CrypticLogo';
import Music from '../components/Cryptic Calling/Music/Music';
import News from '../components/Cryptic Calling/News/News';
import About from '../components/Cryptic Calling/About/About';
import Contact from '../components/Cryptic Calling/Contact/Contact';
import Lyrics from '../components/Cryptic Calling/Lyrics/Lyrics';


export default class Home extends React.Component {
    constructor (props) {
        super(props)
        this.toggleMusic = this.toggleMusic.bind(this);
        this.toggleNews = this.toggleNews.bind(this);
        this.toggleAbout = this.toggleAbout.bind(this);
        this.toggleLyrics = this.toggleLyrics.bind(this)

        this.state = {
            showMusic: false,
            showNews: false,
            showAbout: true,
            showLyrics: false
        }
    }

        toggleMusic (event) {
            event.preventDefault()
            this.setState({
                showMusic: true,
                showNews: false,
                showAbout: false,
                showLyrics: false
            })
        }

        toggleNews (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showNews: true,
                showAbout: false,
                showLyrics: false
            })
        }

        toggleAbout (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showNews: false,
                showAbout: true,
                showLyrics: false
            })
        }

        toggleLyrics (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showNews: false,
                showAbout: false,
                showContact: false,
                showLyrics: true
            })
        }

    render() {
        const {showMusic} = this.state;
        const {showNews} = this.state;
        const {showAbout} = this.state;
        const {showLyrics} = this.state;
        return( 
        <div>   
            <CrypticNavBar
                music = {this.onClick=this.toggleMusic}
                news = {this.onClick=this.toggleNews}
                about = {this.onClick=this.toggleAbout}
                 />

                    <CrypticLogo />

                    { showMusic === true ? <Music lyrics = {<Button onClick={this.toggleLyrics}>Lyrics</Button>} /> : "" }
                    { showNews === true ? <News /> : "" }
                    { showAbout === true ? <About /> : "" }
                    { showLyrics === true ? <Lyrics  /> : "" }
                    <Contact />
        </div>
        )
    }
}