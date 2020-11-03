import React from 'react';
import { Container, Card, Image, Button } from "semantic-ui-react"

function StaticSirenMusic() {
    return(
        <Container>
        <Card>
        <Image centered fluid> <img src={require("../../../images/theDescent.png")} alt="lastWords"/></Image>
        <Card.Content>
          <Card.Header>The Descent (Demo)</Card.Header>
          <Card.Meta>
            <span className='date'>Released 2019</span>
          </Card.Meta>
          <Card.Description>
            Available on <Button icon="play" href="https://play.google.com/music/listen?u=0#/album/Bqflti7egqlde5ltosiswafni74/Static+Siren/The+Descent" target="_blank" rel="noopener noreferrer" size="tiny" />
            <Button icon="amazon" href="https://www.amazon.com/Descent-Static-Siren/dp/B07KBY3RG6" target="_blank" rel="noopener noreferrer" size="tiny" />
            <Button icon="spotify" href="https://open.spotify.com/album/0AbC2h2jeebSEbm3qC5SNu" target="_blank" rel="noopener noreferrer" size="tiny" />
            <Button icon="apple" href="https://music.apple.com/us/album/the-descent-single/1441728739" target="_blank" rel="noopener noreferrer" size="tiny" />
          </Card.Description>
        </Card.Content>
      </Card>
      </Container>
    )
}

export default StaticSirenMusic;