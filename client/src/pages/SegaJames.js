import React from 'react';
import SegaJamesNavBar from '../components/Sega James/SegaJamesNavBar/SegaJamesNavBar';
import SegaJamesLogo from '../components/Sega James/Logo/SegaJamesLogo';
import News from '../components/Sega James/News/News';
import About from '../components/Sega James/About/About';
import Contact from '../components/Sega James/Contact/Contact';


export default class Home extends React.Component {
    constructor (props) {
        super(props)
        this.toggleNews = this.toggleNews.bind(this);
        this.toggleAbout = this.toggleAbout.bind(this);

        this.state = {
            showNews: false,
            showAbout: true,
        }
    }

        toggleNews (event) {
            event.preventDefault()
            this.setState({
                showMusic: false,
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
        const {showNews} = this.state;
        const {showAbout} = this.state;
        return( 
        <div>   
            <SegaJamesNavBar
                news = {this.onClick=this.toggleNews}
                about = {this.onClick=this.toggleAbout}
                 />

                    <SegaJamesLogo />
                    
                    { showNews === true ? <News /> : "" }
                    { showAbout === true ? <About /> : "" }
                    
                    <Contact />
        </div>
        )
    }
}