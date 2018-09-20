import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { OverView } from '../OverView';

const styles = {
  root: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: '#EDE9E3'
  },
  AppBar: {
    height: '20%',
    borderBottom: '0.2px solid black'
  },
  main: {
    height: '80%'
  }
};

const Nav = (props) => {
  const { classes, children } = props;
  return (
    <div className={classNames(classes.root, "container-column", "flex-item")}>
        <div className={classes.AppBar}>
          <OverView />
        </div>
        <div className={classes.main}>
            {children}
        </div>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};
const Layout = withStyles(styles)(Nav);
export default Layout