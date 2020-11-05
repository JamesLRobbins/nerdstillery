import React from 'react';
import { Container } from 'semantic-ui-react'

function About() {
    return(
        <div>
            <Container className="about">
            <img src={require("../../../images/nerdCouple.png")} alt="nerdCouple" className="ui fluid image small floated" floated="left" />
            <p>What is <i>Nerdstillery</i>? <b>Nerd-still-er-y</b></p>
            <p>Nerdstillery was founded by James Robbins, along with his wife Kimberly and friend Shane Vinson.  With multiple musical projects, along with various other hobbies, James wanted a way to be able to showcase not only his talents, but others as well.</p>
            <p>Originally, Nerdstillery was simply a Youtube channel where James discussed his video game collection. Overtime, the channel branched out to discuss more than just video games.  Including, but not limited to movies, comic books, toys, music, and even booze.  Nerdstillery has grown to become a production company in a way that houses all these projects, and more to come. </p>
            <p>Feel free to also join our Discord where we discuss anything from movies, video games, TV, anime, and more in a judgement free zone.</p>

            </Container>
        </div>
    )
}

export default About;