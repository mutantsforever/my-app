import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Login extends React.Component {
    state = {
      username: '',
      password: '',
    };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };    

    render() {
        const { classes } = this.props;

        return(
            <form className={classes.container} noValidate autoComplete="off">

                <TextField
                required
                id="standard-username"
                label="Username"
                placeholder="Username"
                className={classes.textField}
                margin="normal"
                />

                <TextField
                required
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                />

                <Button variant="contained" color="primary" className={classes.button}>
                    Submit
                </Button>
            </form>
        );
    }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);