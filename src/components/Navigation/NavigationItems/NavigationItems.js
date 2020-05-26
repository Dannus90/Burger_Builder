import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationsItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact>
            Burger Builder
        </NavigationItem>
        {props.isAuthenticated ? (
            <NavigationItem link="/orders">Order</NavigationItem>
        ) : null}
        {!props.isAuthenticated ? (
            <NavigationItem link="/auth">Authenticate</NavigationItem>
        ) : (
            <NavigationItem link="/logout">Logout</NavigationItem>
        )}
    </ul>
);

export default navigationsItems;
