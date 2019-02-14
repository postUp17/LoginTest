import React from 'react'


import NavigationItems from '../NavigationItems/NavigationItems.js'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import DrawerToggle from '../SideDrawer/DrawToggle/DrawToggle'
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
       <div className={classes.Logo}>
           <Logo />
       </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
           
        </nav>
    </header>
)

export default toolbar