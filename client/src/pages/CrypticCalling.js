import React from 'react';
import { Button, Icon, Container} from 'semantic-ui-react';
import CrypticNavBar from "../components/Cryptic Calling/CrypticNavBar/CrypticNavBar";
import CrypticLogo from '../components/Cryptic Calling/Logo/CrypticLogo';
import Music from '../components/Cryptic Calling/Music/Music';
import Videos from '../components/Cryptic Calling/Videos/Videos';
import News from '../components/Cryptic Calling/News/News';
import About from '../components/Cryptic Calling/About/About';
import Contact from '../components/Cryptic Calling/Contact/Contact';
import Lyrics from '../components/Cryptic Calling/Lyrics/Lyrics';


export default class Home extends React.Component {
    constructor (props) {
        super(props)
        this.toggleMusic = this.toggleMusic.bind(this);
        this.toggleVideos = this.toggleVideos.bind(this);
        this.toggleNews = this.toggleNews.bind(this);
        this.toggleAbout = this.toggleAbout.bind(this);
        this.toggleContact = this.toggleContact.bind(this);
        this.toggleLyrics = this.toggleLyrics.bind(this)

        this.state = {
            showMusic: false,
            showVideos: false,
            showNews: false,
            showAbout: true,
            showContact: false,
            showLyrics: false
        }
    }

        toggleMusic (event) {
            event.preventDefault()
            this.setState({
                showMusic: true,
                showVideos: false,
                showNews: false,
                showAbout: false,
                showContact: false,
                showLyrics: false
            })
        }

        toggleVideos (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: true,
                showNews: false,
                showAbout: false,
                showContact: false,
                showLyrics: false
            })
        }

        toggleNews (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: false,
                showNews: true,
                showAbout: false,
                showContact: false,
                showLyrics: false
            })
        }

        toggleAbout (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: false,
                showNews: false,
                showAbout: true,
                showContact: false,
                showLyrics: false
            })
        }

        toggleContact (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: false,
                showNews: false,
                showAbout: false,
                showContact: true,
                showLyrics: false
            })
        }

        toggleLyrics (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
                showVideos: false,
                showNews: false,
                showAbout: false,
                showContact: false,
                showLyrics: true
            })
        }

    render() {
        const {showMusic} = this.state;
        const {showVideos} = this.state;
        const {showNews} = this.state;
        const {showAbout} = this.state;
        const {showContact} = this.state;
        const {showLyrics} = this.state;
        return( 
        <div>   
            <CrypticNavBar
                music = {this.onClick=this.toggleMusic}
                videos = {this.onClick=this.toggleVideos}
                news = {this.onClick=this.toggleNews}
                about = {this.onClick=this.toggleAbout}
                contact = {this.onClick=this.toggleContact}
                 />

                <Container>
                    <CrypticLogo />

                    { showMusic === true ? <Music lyrics = {<Button onClick={this.toggleLyrics}>Lyrics <Icon name="music" /></Button>} /> : "" }
                    { showVideos === true ? <Videos /> : ""}
                    { showNews === true ? <News /> : "" }
                    { showAbout === true ? <About /> : "" }
                    { showContact === true ? <Contact /> : "" }
                    { showLyrics === true ? <Lyrics  /> : "" }
                </Container>
        </div>
        )
    }
}