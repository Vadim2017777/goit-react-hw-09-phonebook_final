import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
const CssTextField = withStyles({
  root: {
    width: '260px',
    marginBottom: '26px',
    textAlign: 'left',
    '& label.Mui-focused': {
      color: '#438192',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#3c6a77',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#3c6a77',
      },
      '&:hover fieldset': {
        borderColor: '#438192',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#b8b2b2',
      },
    },
  },
})(TextField);

export default CssTextField;
