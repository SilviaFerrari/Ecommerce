import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  /*esatta quantità di pixel che deve avere la navbar in altezza*/  
  toolbar: theme.mixins.toolbar,
  /*per risolvere il problema della navbar che copre parzialmente le immagini*/
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    /*per la distribuzione dell spazio*/
    /*This property specifies how much of the remaining space in the flex container 
    should be assigned to the item (the flex grow factor).*/
    flexGrow: 1,
  },
}));