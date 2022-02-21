import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

const Footer = () => {
    return (
        <Box sx={{mt: '150px'}}>
            <Container sx={{boxSizing: 'inherit', backgroundColor: '#141c3a', padding: '15px', boxShadow: '0 5px 5px 0 rgb(0 0 0 / 20%), 0 0 0 1px #141c3a', borderRadius: '12px', borderLeft: '1px, solid, #E6ECF8', position: 'absolute', bottom: '-730px', right:'49px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4} sx={{color: 'white', fontWeight: '500', fontSize: '1rem', fontFamily: 'eurostile, sans-serif'}}>
                        <h1>Start a project</h1>
                    </Grid>
                    <Grid item xs={6} md={4} sx={{fontSize: '18px', color: 'white', font: 'inherit'}}>
                         <p>Interested in working together? We should queue up a chat. I’ll buy the coffee</p>
                    </Grid>
                    <Grid item xs={6} md={4}>
                    <a href="mailto:muhammadtamimuddin@gmial.com"><button className="tour-btn" style={{color: 'white', padding: '10px, 20px', width: '50%', borderRadius: '15px', font: 'inherit', fontSize: '18px', marginTop: '20px'}}>Let's talk</button></a>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{backgroundColor: '#F2F3F4', p: 10}}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={12}>
                    <Typography variant="h5" gutterBottom component="div">
                        Living, learning, & leveling up <br /> one day at a time.
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        <a href='https://www.linkedin.com/in/md-tamim1/'><LinkedInIcon /></a>
                        <a href='https://github.com/Tamim-uddin'><GitHubIcon/></a>
                    </Typography>     
                </Grid>     
            </Grid>
        </Box>
        </Box>
    );
};

export default Footer;