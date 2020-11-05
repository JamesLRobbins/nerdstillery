import React from 'react';
import { Card, Image, Container, Button } from 'semantic-ui-react';

function CrypticCallingMusic(props) {
    return(
      <Container>
        <Card>
        <Image centered fluid> <img src={require("../../../images/lastWords.jpg")} alt="lastWords"/></Image>
        <Card.Content>
          <Card.Header>Last Words</Card.Header>
          <Card.Meta>
            <span className='date'>Released 2016</span>
          </Card.Meta>
          <Card.Description>
            Available on <Button icon="play" href="https://play.google.com/music/listen?u=0#/album/Bnbdxwxegks3ijgxbobbfawndbi/Cryptic+Calling/Last+Words" target="_blank" rel="noopener noreferrer" size="tiny" />
            <Button icon="amazon" href="https://www.amazon.com/Last-Words-Cryptic-Calling/dp/B01DOH1JBE/ref=sr_1_2?dchild=1&keywords=Cryptic+Calling&qid=1600219140&sr=8-2" target="_blank" rel="noopener noreferrer" size="tiny" />
            <Button icon="spotify" href="https://open.spotify.com/artist/6rqBgpwZuPwlSB9nlFcqWK" target="_blank" rel="noopener noreferrer" size="tiny" />
            <Button icon="itunes note" href="https://music.apple.com/us/album/last-words/1096896761" target="_blank" rel="noopener noreferrer" size="tiny" />
          </Card.Description>
        </Card.Content>
        <Card.Content>
          {props.lyrics}
        </Card.Content>
      </Card>
      </Container>
    )
}

export default CrypticCallingMusic;