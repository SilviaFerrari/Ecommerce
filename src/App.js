import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Products from './components/Products/Products.jsx';
import { commerce } from './lib/commerce.js';

//possiamo importare tutti i file componenti con un una riga di codice
//ma in tal caso avremmo bisogno di un altro file a parte che specifica dove sono
//import {Products, Navbar, ...} from './components';

const App = () => {
  //state, per default i nostri prodotti saranno un array vuoto
  const [products, setProducts] = useState([]);

  //state, empty object per creare il carrello
  const [cart, setCart] = useState({});

  //vogliamo predere la risposta da await, quindi dobbiamo attendere qualcosa,
  //in questo caso una specifica chiamata API da questa istanza di commerce.
  //Il valore di ritorno è una promise quindi dobbiamo attendere per vedere cosa c'è al suo interno.
  //Una volta che l'abbiamo possiamo destrutturare data da essa, e data sarà il nostro prodotto
  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  //per vedere quello che c'è nel carrello, prende il carrello e lo setta dentro lo state
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  //funzione che aggiunge i prodotti al carrello con due parametri
  //non avendo alcun bottone qui, vogliamo usare la funzione dentro alle componenti
  const AddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  //l'array [] alle sue dipendenze è vuoto, ciò significa che funzionerà solo all'inizio del render
  useEffect(() => {
    fetchProducts(); /*chiama la lista commerce products e setta i prodotti nello state*/
    fetchCart(); 
  }, []);

  //console.log(products);
  //console.log(cart); nella console potremo trovare line_items, che sono gli oggetti nel carrello

  return (
    <div>
      <Navbar />
      {/*si passa il nostro prodotto come prop dentro alla funzione dei prodotti*/}
      <Products products={products} onAddToCart={AddToCart} /> {/*passati come props*/}
    </div>
  )
}

export default App;
