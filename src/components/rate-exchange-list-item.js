import React, { Component } from  "react";
import ReactChartKick, { AreaChart } from "react-chartkick"
import Chart from "chart.js"

ReactChartKick.addAdapter(Chart);
class RateExchangeListItem extends Component {
    render() {
       /* console.log(this.props.rateExchange);*/
        const { flag,name,rates,currencyCode,population,capital,
               region,subregion,demonym,area,NameCurrencyCode,
               SymbolCurrencyCode,language,nativeLanguage,translation,translationJap } = this.props.rateExchange;
        return (<tr>
                <td>{name}<br/><img src={flag}alt="flagCountry"/><br/><br/>
                RESIDENTS : {population} persons<br/>CAPITAL : {capital}<br/>
                REGION : {region}<br/>SUBREGION : {subregion}<br/>
                NAME OF RESIDENTS : {demonym}<br/>
                AREA : {area} km²
                </td>
                <td><AreaChart data={formatData(rates,currencyCode)}
                xtitle="date"
                ytitle={currencyCode}
                />
                </td>
                <td>
                <br/><br/><br/>En français : {translation} <br/>MONNAIE : {NameCurrencyCode}<br/>
                SYMBOL : {SymbolCurrencyCode}<br/>LANGUAGE : {language},
                <br/>NATIVE : {nativeLanguage}<br/>{translationJap} 
                </td>
            </tr>
        );
    }
}

function formatData(rates,currencyCode){
    return Object.keys(rates).map( date =>{
        return [date ,rates[date][currencyCode]]
    })
}
export default RateExchangeListItem;