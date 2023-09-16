import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        removeCar: (index) => dispatch(removeCar(index)) //they key is the index, the value is what is returned in the default function
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)