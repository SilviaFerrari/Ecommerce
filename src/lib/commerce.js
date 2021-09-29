import Commerce from '@chec/commerce.js';

/*creiamo una nuoca istanza specifica che sarà il nostro store*/
/*1° paramtro sarà la public key dello store quindi ci serve un account su Commercejs.com*/
/*2° parametro, valore buleano true, significa che andiamo a creare un nuovo store*/
/*abbiamo così creato l'oggetto commerce che possiamo usare ovunque*/
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);