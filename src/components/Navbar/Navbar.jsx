import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';

import logo from '../../assets/lega.png';
import Styles from './styles';

const Navbar = () => {
  /*importiamo lo stile specifico di questa pagina*/
  const classes = Styles();
  return (
    <div>
      {/*definizione della navigation bar*/}
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                {/*parte sinistra*/}
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                    <p>Ecommerce</p>
                </Typography>
                {/*al centro in cui abbiamo tutto lo spazio che ci serve*/}
                <div className={classes.grow} />
                {/*parte destra*/}
                <div className={classes.button} />
                  <IconButton aria-label="Show cart items" color="inherit">
                    {/*per il momendo l'icona del carrello avrà un valore presettato
                    di oggetti dentro, in seguito diventerà dinamico*/}
                    <Badge badgeContent={2}>
                      {/*impostiamo l'icona del carrello*/}
                      <ShoppingCart />
                    </Badge>
                  </IconButton>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
