import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

//ownProps是自身的属性
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
    children: ownProps.children + "------"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
