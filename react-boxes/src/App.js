import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <div className='main'>
          <Sidebar />
          <Body />
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
