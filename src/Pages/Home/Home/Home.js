import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../Footer/Footer';
import Portfolios from '../Portfolios/Portfolios';

const Home = () => {
    return (
        <div>
            <div className='container-header'>
            <Typography className='container-mider'  variant="h3" gutterBottom component="div" sx={{textAlign: 'left', fontFamily: 'Montserrat,sans-serif', color: '#303030', fontWeight: '500', ml: '30px', mt: '30px'}}>
            Hi, <br /> I'm
            <span style={{color: '#000', fontWeight: '900', fontFamily: 'Montserrat,sans-serif', fontSize: '50px'}}> Tamim, <br /> Web  </span>Developer <br />
            </Typography>
             <p style={{textAlign: 'left', marginLeft: '30px'}}>I design and code beautifully simple things, and I love what I do.<br />I'm quietly confident, naturally curious, and perpetually working on improving my chops one development problem at a time.</p>
            </div>
            <Portfolios />
            <Footer />
        </div>
    );
};

export default Home;