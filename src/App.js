
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import './Components/StyleSheet.css';

function App() {

  return (
    <div className="App">
       
      <h1 className='colorTitle'> My To Do List </h1>
      <ListTask  />
      <AddTask/>
      
    </div>
  );
}

export default App;
