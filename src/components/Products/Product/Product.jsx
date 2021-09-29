import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
/*importiamo lo stile specifico di questa pagina in modo da poterne usare le classi*/
import Styles from './styles';

const Product = ({product, onAddToCart}) => {
    const classes = Styles();

    //serve per verificare i parametri da cambiare in base a come sono nominati nella console
    //e allo stesso tempo non avere alcun errore
    //console.log(product);
    //return <div>test</div>

    /*strutturiamo la card di un singolo prodotto, che verrà replicata in base 
    a quanti prodotti vengono definiti nel file Products*/
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    {/*typography to present contents clearly and efficiently.*/} 
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                {/*dangerouslySetInnerHTML={{__html: product.description}} serve per visualizzare correttamente
                la descrizione esattamente come se fosse un vero codice html, altrimenti appare anche <p>*/}
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                {/*serve la callback per dire quale oggetto specifico stiamo aggiungendo*/}
                <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
