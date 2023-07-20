import logo from './logo.svg';
import './App.css';
import  DisplayTodos  from './components/DisplayTodos';
import AddTodo  from './components/AddTodo';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>

    
    <div className="App">
       <Container>
            <AddTodo/>
            <DisplayTodos/>
        </Container>
    </div>
 
  </Provider>
   );
}

export default App;
