
import './App.css';
import Cards from './Componentz/Cards';
import pharmacy from './assets/img/pharmacy.jpg';


function App() {
  return (
    <div>
      <Cards title="Medicine"
      description="img element must have alt prpo,eithet with text"
      src={pharmacy}/>
      <Cards src={pharmacy} title="Alter medicine" 
      description="img element must have alt prpo,eithet with text"/>
    </div>
  );
}

export default App; 
