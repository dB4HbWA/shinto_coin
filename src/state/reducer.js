import { createStore, compose } from 'redux';
import { BUY_SHINTO_COINS, SELL_SHINTO_COINS, MINE_SHINTO_COINS } from './action';

const initialState = {
    value: 1,
    transaction: [], //{id: '', action: '', amount: 0, value: 0}
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case BUY_SHINTO_COINS:

            return { ...state, value: state.value + action.payload}

        case SELL_SHINTO_COINS:

            return { ...state, value: state.value - action.payload}

        case MINE_SHINTO_COINS:

            return { ...state, value: state.value + 1}

        default:
            return state;
    }
}

export default reducer;