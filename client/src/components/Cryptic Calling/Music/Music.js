import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function CrypticCallingMusic(props) {
    return(
        <Card>
        <Image centered fluid> <img src={require("../../../images/lastWords.jpg")} alt="lastWords"/></Image>
        <Card.Content>
          <Card.Header>Last Words</Card.Header>
          <Card.Meta>
            <span className='date'>Released 2016</span>
          </Card.Meta>
          <Card.Description>
            Available on <a href="https://play.google.com/music/listen?u=0#/sr/Cryptic+Calling" target="_blank" rel="noopener noreferrer">Google Play, </a>
            <a href="https://www.amazon.com/Last-Words-Cryptic-Calling/dp/B01DOH1JBE/ref=sr_1_2?dchild=1&keywords=Cryptic+Calling&qid=1600219140&sr=8-2" target="_blank" rel="noopener noreferrer">Amazon,</a>
            <a href="https://open.spotify.com/artist/6rqBgpwZuPwlSB9nlFcqWK" target="_blank" rel="noopener noreferrer"> Spotify,</a> and
            <a href="https://music.apple.com/us/album/last-words/1096896761" target="_blank" rel="noopener noreferrer"> iTunes</a>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          {props.lyrics}
        </Card.Content>
      </Card>
    )
}

export default CrypticCallingMusic;