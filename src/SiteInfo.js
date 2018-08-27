import React, {Component} from 'react';
import { connect } from 'react-redux';


class SiteInfo extends Component{



    render(){
        if(this.props.currentStatus === 'site'){
            return(
                <p>Site Info</p>
            );
        }

        if(this.props.currentStatus === 'zone'){
            var cur_z = this.props.currentZone;
            var dat = this.props.statics[cur_z];
            var datae = dat.ZoneData;
          return(

                <table>
                    <tr>
                        <th>FirmWareVersion</th>
                        <td>{datae.firmwareVersion}</td>
                    </tr>
                    <tr>
                        <th>Rows></th>
                        <td>{datae.rows}</td>
                    </tr>
                    <tr>
                        <th>SiteID</th>
                        <td>{datae.siteID}</td>
                    </tr>
                    <tr>
                        <th>SiteName</th>
                        <td>{datae.siteName}</td>
                    </tr>
                    <tr>
                        <th>ZoneID</th>
                        <td>{datae.zoneID}</td>
                    </tr>
                </table>
            );
        }

        if(this.props.currentStatus === 'row'){
            var cur_zon = this.props.currentZone;

            var dat = this.props.statics[cur_zon];
            var datee = dat.RowData;
            var cur_roww = this.props.currentRow;
            var cur_rowww = cur_roww.toS
            var dattt = datee[cur_roww];
            return(
                <div>
                    <table>
                        <tr>
                            <th>BoardSerialNumber</th>
                            <td>{dattt.boardSerialNo}</td>
                        </tr>
                        <tr>
                            <th>RowID></th>
                            <td>{dattt.rowID}</td>
                        </tr>
                        <tr>
                            <th>SiteID</th>
                            <td>{dattt.siteID}</td>
                        </tr>
                        <tr>
                            <th>SiteName</th>
                            <td>{dattt.siteName}</td>
                        </tr>
                        <tr>
                            <th>ZoneID</th>
                            <td>{dattt.zoneID}</td>
                        </tr>
                    </table>
    
                </div>
            );
        }

    }
}

const mapStateToProps = state => ({
    currentStatus: state.currentStatus,
    currentZone: state.currentZone,
    currentRow: state.currentRow,
    statics: state.statics
})

export default connect(mapStateToProps)(SiteInfo);