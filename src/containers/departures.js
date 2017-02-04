import { connect } from 'react-redux'
import { updateStop } from '../actions'
import DeparturesTable from '../components/DeparturesTable'

const mapStateToProps = (state) => {
  return {
    departures: state.testReducer.stops.fruangen.departures
  };
}

const Departures = connect(mapStateToProps)(DeparturesTable)

export default Departures