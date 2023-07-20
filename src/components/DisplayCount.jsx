import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { AddTodo } from './AddTodo'
import { connect } from 'react-redux'

const DisplayCount = (props) => {
    return (
         <Card className='shadow-sm border border-0'>
              <Card.Body>
                <h4>No of todos: {props.todos.length}</h4>
              </Card.Body>
         </Card>
    )
}
const mapStateToProps=state=>({
    todos:state.todos
})
const mapDispatchToProps=dispatch=>({})
export default connect(mapStateToProps,mapDispatchToProps)(DisplayCount)