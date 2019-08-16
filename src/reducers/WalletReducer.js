import _ from 'lodash'

const initial = {
    result:
    {
        balance: 1000
    }

}

const WalletReducer = (state = initial, action) => {
    const nextState = _.cloneDeep(state);

    switch (action.type) {
        case "INCOME":
            nextState.result = action.payload;
            return nextState
        case "EXPEND":
            nextState.result = action.payload;
            return nextState
        default:
            return nextState
    }
}

export default WalletReducer