import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

function ShaneGear() {
    return(
        <Container className="shane-about" textAlign="center">
            <Grid columns={4}>
                <Grid.Row>
                    <Grid.Column>
                        <b><u>Camera</u></b><br />Canon 7D
                    </Grid.Column>
                    <Grid.Column>
                        <b><u>Lenses</u></b><br />
                        50mm<br />
                        75-220mm<br />
                        40mm
                    </Grid.Column>
                    <Grid.Column>
                        <b><u>Lighting</u></b><br />Alien Bees by Paul C. Buff
                    </Grid.Column>
                    <Grid.Column>
                        <b><u>Editing Software</u></b><br /> Adobe Products
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
            
        </Container>
    )
}

export default ShaneGear;