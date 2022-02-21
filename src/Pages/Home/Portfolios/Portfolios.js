import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Summary from '../Summary/Summary';
import { Typography } from '@mui/material';


const Portfolios = () => {
    const [portfolios, setportfolios] = useState([]);
    useEffect( () => {
        fetch('./portfolio.json')
        .then(res => res.json())
        .then(data => setportfolios(data))
    } , [])
    return (
        <div>
            <div className='container-header'>
            <Typography className='container-mider'  variant="h4" gutterBottom component="div" sx={{fontFamily: 'eurostile, sans-serif', color: '#000', fontWeight: '800', mt: '120px'}}>
                My Recent Work
            </Typography>
             <p style={{marginBottom: '80px'}}>Here are a few design projects I've worked on recently. Want to see more? <a style={{textDecoration: 'none'}} href="mailto:muhammadtamimuddin@gmail.com">Email me</a>.</p>
            </div>
            <Grid container spacing={2}>
            {
                    portfolios.map(portfolio => <Summary key={portfolio.id} portfolio={portfolio}></Summary>)
            }
            </Grid>

        </div>
    );
};

export default Portfolios;