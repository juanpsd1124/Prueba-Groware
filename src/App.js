import './App.css';
import FoodList from './components/FoodList';
import FoodCreate from './components/FoodCreate';
import { ApiProvider } from './context/apiContext';


const foodInfo = [
  {name: 'Spaguetti',
  value: '123',
  type: 'Italian'}
  ,
  {name: 'Pizza',
  value: '456',
  type: 'Italian'}
  ,
  {name: 'HotDog',
  value: '222',
  type: 'Fast food'},
  {name: 'Chop Suey',
  value: '1000',
  type: 'Fast food'},
]


function App() {
  return <div className="App">
      <div className='header'>
        <h1>Jose Chinese Restaurant Menu</h1>
      </div>
      <FoodList foodInfo={foodInfo} />
      <FoodCreate />
    </div>
 

}

export default App;
