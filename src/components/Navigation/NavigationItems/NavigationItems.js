import React from 'react'

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem.js'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/mainpage'>MAIN PAGE</NavigationItem>
        {props.isAuthenticated
            ? <NavigationItem link='/todolist'>TO DO LIST</NavigationItem>
            : null}
        {!props.isAuthenticated
            ? <NavigationItem  link='/auth'>LOG IN</NavigationItem>
            : <NavigationItem  link='/logout'>LOG OUT</NavigationItem>
        }    </ul>
)

export default navigationItems