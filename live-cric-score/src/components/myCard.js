import React from "react";
import { Card, CardContent, Grid, Typography, CardActions, Button } from "@mui/material";

const MyCard =({match})=>{
    
    const getMatchCard=()=>{
        return (
            <Card>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h5">
                                First Team
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img style={{width:85}} src={require("../img/versus.jpeg")} alt="Versus image"/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" >
                                Second Team
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                    <Button item variant="contained" color="primary" >
                        Show Detail
                    </Button>
                    <Button item variant="contained" color="primary" >
                        {new Date().toString()}
                    </Button>
                    </Grid>
                </CardActions>
            </Card>
        ) ; 
    }

    return getMatchCard() ; 

}

export default MyCard ; 