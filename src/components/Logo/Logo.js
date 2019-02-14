import React from 'react'

import lionLogo from '../../assets/images/logo2.jpg'
import classes from './Logo.css'

const logo=(props)=>(
    <div className={classes.Logo} >
        <img src={lionLogo} alt='MyLion'/>
    </div>
)

export default logo