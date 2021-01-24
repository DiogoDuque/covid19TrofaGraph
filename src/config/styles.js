import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    'backgroundColor': '#f5f5f5',
    flexGrow: 1,
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    padding: 15,
    paddingRight: 30,
  },
  chartContainer: {
    position: 'relative',
    margin: 'auto',
    height: '50vh',
    width: '90vw',
  },
  progress: {
    float: 'none',
    margin: '0 auto',
  },
  appBar: {
    maxWidth: 170,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  formControl: {
    margin: 10,
    // minWidth: 120,
  },
}))();

export default useStyles;