import React from 'react'

import { useLocation } from 'react-router-dom';

function About() {

    const query = new URLSearchParams(useLocation().search);
    console.log(`sort=${query.get('sort')}`);
  
    return (
        <h2>Contact Page</h2>
    )
}

export default About