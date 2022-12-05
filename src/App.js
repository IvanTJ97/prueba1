import './App.css';
import Converter from './components/converter/converter';
import {TbArrowsLeftRight} from 'react-icons/tb';
const App=()=>{
  //En esta parte he usado CSS puro pero en los componentes he utilizado Styled Components
  return (
    <div className="Container">
      <header>
        <div>
          <TbArrowsLeftRight color='#2E0039' size={20}/>
          <h1>unit converter</h1>
        </div>
      </header>
      <Converter/>
      <footer>
        <ul>
          <li><a href="#i">Terms of Service</a></li>
          <li><a href="#i">Privacy Policy</a></li>
        </ul>
      </footer>
    </div>
  );
}
export default App;