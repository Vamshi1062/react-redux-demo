import React, { useState } from 'react'
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import  AddTodo from './AddTodo'
import { connect } from 'react-redux'
import { deleteTodo } from '../redux/actions/todo'

export const DisplayTodos = (deleteTodo) => {
    const [todos,setTodos]=useState([{
        title:'first title',
        description:'first desc'
    }
,{
       title:'second title',
       description:'second desc'
}])
    return (
         <Container>
            <Row>
                <Col>
                <Card className='shadow-sm mt-3'>
                    <Card.Body>
                         <h3>All todos are here</h3>
                         <ListGroup>
                            {
                                todos.map((todo,index)=><ListGroup.Item key={index}>
                                  <h4>{todo.title}</h4>
                                  <p>
                                    {todo.description}
                                  </p>
                                  <Button onClick={e=>deleteTodo.deleteTodo(todo.id)} variant='danger' size='sm'>Delete</Button>
                                </ListGroup.Item>)
                            }
                         </ListGroup>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
         </Container>
    )
}
const mapStateToProps=state=>{
    console.log(state)
    return {todos:state.todos}
}

const mapDispatchToProps=dispatch=>({
    deleteTodo:id=>(dispatch(deleteTodo(id)))

})
export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodos)
