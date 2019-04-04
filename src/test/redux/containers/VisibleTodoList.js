import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import React from 'react'
import TodoList from '../components/TodoList'
import {VisibilityFilters} from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}
/**
 *
 * @param todos
 * @param toggleTodo
 */
const Test = ({todos, toggleTodo}) => {
    return (<div>
        <h1>测试</h1>
        <TodoList toggleTodo={toggleTodo} todos={todos}/>
    </div>)
}
//描述怎么把state转化为props
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
})
//描述触发指定的dispatch
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test)
