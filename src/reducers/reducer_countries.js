import { GET_COUNTRIES } from "../actions";
import { supportedCurrencyCode } from '../supportedCurrencies';

const initialState = {
    countries:[]
};
export default function(countriesReducer = initialState, action){
      switch(action.type){
        case GET_COUNTRIES : 
         return {
             ...countriesReducer,
             countries : getCountriesInfo(action.payload)
         };
         default:
            return countriesReducer;       
    }
}

function getCountriesInfo(data){
      return data.map(c => {
          return {
              name : c.name,
              currencyCode: c.currencies[0].code,
              NameCurrencyCode: c.currencies[0].name,
              SymbolCurrencyCode: c.currencies[0].symbol,
              flag : c.flag,
              code : c.alpha3Code,
              population : c.population,
              capital : c.capital,
              region : c.region,
              subregion : c.subregion,
              demonym : c.demonym,
              area : c.area,
              language : c.languages[0].nativeName,
              nativeLanguage : c.languages[0].name,
              translation : c.translations["fr"],
              translationJap : c.translations["ja"]
          };

      })
      .filter(c => {
         return supportedCurrencyCode.indexOf(c.currencyCode) > -1
      });
}