import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Food } from './components/food-tile';
import { Fitness } from './components/fitness-tile';
import { Selfcare } from './components/selfcare-tile';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Food />
      <Fitness />
      <Selfcare />
      <Footer />
    </div>
  );
}

export default App;
