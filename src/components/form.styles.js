import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
      // width: '600px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  select: {
    "& ul": {
      backgroundColor: "green",
    },
    "& li": {
      fontSize: 15,
    },
  },
}));

export default useStyles;
