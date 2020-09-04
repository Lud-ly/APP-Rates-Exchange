import { GET_RATE_EXCHANGE } from "../actions"

const initialState = {
    rateExchangelist : []
};
export default function(oldRateExchangeReducer = initialState,action){
    switch(action.type){
        case GET_RATE_EXCHANGE : 
        return {
            ...oldRateExchangeReducer,
            rateExchangelist : [
                action.payload,
                ...oldRateExchangeReducer.rateExchangelist
            ]
  };
  default:
      return oldRateExchangeReducer;
  }
}