import React, { Component } from  "react";
import { connect } from 'react-redux';
import RateExchangeListItem from "../components/rate-exchange-list-item";
class RateExchangeList extends Component {
    render() {
        return (
            <table className='table'>
            <thead>
                <tr><td>Pays</td>
                <td className="col-md-6">Consulter la valeur de la monnaie d'un pays par rapport au Dollar $  </td>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.rateExchangelist.map((r,index) => {
                        return <RateExchangeListItem  key={r.code + index} rateExchange={r}/>;
                     })
                }
            </tbody>
        </table>
        )
        
    }
 }

const mapStateToProps = state => {
    return {
        rateExchangelist : state.RateExchangeReducer.rateExchangelist
    };
};
export default connect(mapStateToProps, undefined)(RateExchangeList);