import { Grid, Link } from '@mui/material';
import React from 'react';
import './Summary.css';

const Summary = ({portfolio}) => {
    const {id, name, img, link} = portfolio;
    return (
        <Grid item xs={6} md={4}>
            <div className="container">
            <img src={img} alt="" className="image" />
                <div className="overlay">
                    <div className="text">
                        <h3>{name}</h3>
                        
                            {/* <div className="tour-last"> */}
                                    
                                {/* <Link to={link}> <button className="tour-btn">Details</button></Link> */}
                            {/* </div> */}
                            {/* <input type="button" onclick= {link} value="Go to Google" /> */}
                            <a href={link}><button className="tour-btn">View project</button></a>
                    </div>
                 </div>
        </div>
        </Grid>
    );
};

export default Summary;