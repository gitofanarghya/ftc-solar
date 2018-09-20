import React from 'react';
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames';

export class OverView extends React.Component {

    render() {
        return (
            <Grid container className={classNames("flex", "h100")} justify="center" direction="row" alignItems="stretch">
                <Grid item xs={2} className="flex">
                    <FTCLogo />
                </Grid>
                <Grid item xs={2} className="flex">
                    <TotalNoOfTrackers />
                </Grid>
                <Grid item xs={2} className="flex">
                    <OverallUptime />
                </Grid>
                <Grid item xs={2} className="flex">
                    <TrackerInfo />
                </Grid>
                <Grid item xs={2} className="flex">
                    <OtherInfo />
                </Grid>
                <Grid item xs={2} className="flex">
                    <ClientLogo />
                </Grid>
            </Grid>
        )
    }

}

const FTCLogo = () => {
    return (
        <div className="ftclogo"></div>
    )
}

const TotalNoOfTrackers = () => {
    return (
        "TotalNoOfTrackers"
    )
}

const OverallUptime = () => {
    return (
        "OverallUptime"
    )
}

const TrackerInfo = () => {
    return (
        "TrackerInfo"
    )
}

const OtherInfo = () => {
    return (
        "OtherInfo"
    )
}

const ClientLogo = () => {
    return (
        "ClientLogo"
    )
}