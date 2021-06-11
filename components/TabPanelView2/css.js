import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { fade, darken } from '@material-ui/core/styles/colorManipulator';
import decoLightTop from '~/public/images/mobile/deco-light-top.svg';
import decoDarkTop from '~/public/images/mobile/deco-dark-top.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor: theme.palette.background.paper,
    width: '100%',
    position: 'relative',
    minHeight: 500,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
  AppBarDesign: {
    width: '80%', 
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  }
}));

export default useStyles;
