import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 1)
  },

  icon: {
    marginRight: '20px',
  },

  buttons: {
    marginTop: '40px',
  },

  cardGrid: {
    padding: '20px 0',
  },

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  cardMedia: {
    paddingTop: '405px', // 16:9 aspect ratio
    position: 'relative',
    overflow: 'hidden'
  },

  cardContent: {
    flexGrow: 1,
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px 0'
  }
}));

export default useStyles;