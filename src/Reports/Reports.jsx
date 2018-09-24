import React from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    formControl: {
    },
    paper: {
        margin: theme.spacing.unit * 2,
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
                </Grid>
            </Grid>
        )
    }
}

const ReportsWithStyles =  withStyles(styles, { withTheme: true })(Reports);
export { ReportsWithStyles as Reports }