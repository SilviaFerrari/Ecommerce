import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product.jsx';
import Styles from './styles';

/*import img1 from '../../assets/rainbow.png';
import img2 from '../../assets/bazuka.jpg';
import img3 from '../../assets/shit.jpg';
import img4 from '../../assets/brain.jpg';*/

{/*array with products specifications*/}
/*const products = [
    {id:1, name:'Rainbow', description:'Sei così sfigato da non aver mai visto un arcobaleno? Compra il tuo!',
        price:'$1000', image: img1},
    {id:2, name:'Bazuka', description:'Un gioco carino e coccoloso, perfetto i tuoi bambini!',
        price:'$500', image: img2},
    {id:3, name:'Shit', description:'Da tirare in testa a quelli che ti stanno sul cazzo, ma con stile.',
        price:'$1', image: img3},
    {id:3, name:'Cervello', description:'Quello che non hai.',
        price:'$700', image: img4}
];*/


//per ogni prodotto noi mandiamo l'oggetto specifico dentro al nostro product component
//quindi tutto il lavoro viene svolto dentro al product component
const Products = ({products, onAddToCart}) => {
    const classes = Styles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            {/*defining some style and how many products will be shown on a specific screen */}
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>    
                ))}
            </Grid>
        </main>
    )
}

export default Products;