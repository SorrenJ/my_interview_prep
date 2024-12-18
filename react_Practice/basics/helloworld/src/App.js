import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Greetings from './components/Greetings'

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Greetings name= "Sorren"/>
    </div>
  );
}

export default App;
