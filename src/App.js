import logo from './logo.svg';
import './App.css';
import './styles/colors.css';
import DunnedevNavbar from './dunnedev/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <DunnedevNavbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website under maintenance
        </p>
        <p>
          Main site available at <a href="https://dunnedev.ie/">dunnedev.ie</a>
        </p>
      </header>
    </div>
  );
}

export default App;
