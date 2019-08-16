import { connect } from 'react-redux';
import Wallet from '../components/Wallet';
import {addMoney,removeMoney} from '../actions/WalletAction'


const mapDispatchToProps = (dispatch) => ({
    incomeWallet: async (data) => {
        data.balance = parseInt(data.balance) + parseInt(data.income)
        dispatch(addMoney(data))
    },

    expendWallet: async (data) => {
        data.balance = parseInt(data.balance) - parseInt(data.expend)
        dispatch(removeMoney(data))
    },
})

const mapStateToProps = (state) => {
    const { result } = state.wallet;
    return {
        result
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Wallet)