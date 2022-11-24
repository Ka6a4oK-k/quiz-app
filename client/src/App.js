import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import './app.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
