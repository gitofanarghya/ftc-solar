import React from 'react'
import { Grid } from '@material-ui/core';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit * 3,
      width: '100%'
    },
    paper: {
        margin: theme.spacing.unit * 2,
        boxShadow: '0px 0px 1px 0px grey'
    }
});

class Reports extends React.Component {

    render() {
        const { classes } = this.props;

        return(
            <Grid container className={classNames("flex", "h100")} justify="center" direction="row" alignItems="stretch">
                <Grid item xs={3} className={classNames("flex", classes.paper)}>

                </Grid>
                <Grid item xs={3} className={classNames("flex", classes.paper)}>
                
                </Grid>
                <Grid item xs={3} className={classNames("flex", classes.paper)}>
<<<<<<< HEAD
                    <Typography align="center" component="div" variant="title" 
                    style={{ 
                        margin: 'auto'
                    }}>
                        Daily report e-mail recipients
                    </Typography>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                    <TextField
                        id="outlined-full-width"
                        label="Recipient email ids"
                        style={{ margin: 8 }}
                        helperText="Use comma to seperate email ids, don't use any blanks"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    </FormGroup>
                    </FormControl>
                    <Button variant="outlined" component="span" className={classes.button}>
                        Save
                    </Button>
=======
                
>>>>>>> fb600f77f2f06b8858ce6f053a14d1eb2864c6ff
                </Grid>
            </Grid>
        )
    }
}

const ReportsWithStyles =  withStyles(styles, { withTheme: true })(Reports);
export { ReportsWithStyles as Reports }