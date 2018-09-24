import React from 'react'
import { Grid, Typography, FormControl, FormGroup, FormControlLabel, Checkbox, Button, TextField } from '@material-ui/core';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    formControl: {
        margin: 'auto'
    },
    paper: {
        margin: theme.spacing.unit * 2,
        boxShadow: '0px 0px 1px 0px grey',
        flexDirection: 'column'
    },
    button: {
        margin: 'auto'
    }
});

class Reports extends React.Component {

    render() {
        const { classes } = this.props;

        return(
            <Grid container className={classNames("flex", "h100")} justify="center" direction="row" alignItems="stretch">
                <Grid item xs={3} className={classNames("flex", classes.paper)}>
                    <Typography align="center" component="div" variant="title" 
                    style={{ 
                        margin: 'auto'
                    }}>
                        Regular reports
                    </Typography>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <FormControlLabel
                        control={
                            <Checkbox value="daily" />
                        }
                        label="Daily Report"
                        />
                        <FormControlLabel
                        control={
                            <Checkbox value="weekly" />
                        }
                        label="Weekly Report"
                        />
                        <FormControlLabel
                        control={
                            <Checkbox value="monthly" />
                        }
                        label="Monthly Report"
                        />
                        <FormControlLabel
                        control={
                            <Checkbox value="yearly" />
                        }
                        label="Yearly Report"
                        />
                    </FormGroup>
                    </FormControl>
                    <Button variant="outlined" component="span" className={classes.button}>
                        Generate
                    </Button>
                </Grid>
                <Grid item xs={3} className={classNames("flex", classes.paper)}>
                    <Typography align="center" component="div" variant="title" 
                    style={{ 
                        margin: 'auto'
                    }}>
                        Custom reports
                    </Typography>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <TextField
                            id="fromDate"
                            label="From Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br />
                        <br />
                        <TextField
                            id="toDate"
                            label="To Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormGroup>
                    </FormControl>
                    <Button variant="outlined" component="span" className={classes.button}>
                        Generate
                    </Button>
                </Grid>
                <Grid item xs={3} className={classNames("flex", classes.paper)}>
                    <Typography align="center" component="div" variant="title" 
                    style={{ 
                        margin: 'auto'
                    }}>
                        Daily report e-mail recepients
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