// import {Header} from './components/header/Header';
import { Footer } from './components/footer/Footer';
import LoginForm from './components/reg/jsx/LoginForm';
// import { Main } from './components/main/Main';
// import {Exchanger} from './components/pages/Exchanger'

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BadExchanger } from './components/pages/badExchanger/BadExchenger';



function App() {

  return (
    <div className="App">
       
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exchanger" element={<Exchanger />} />
            <Route path="/badExchenger" element={<BadExchanger />} />
          </Routes>
        </BrowserRouter> */}
        <Footer />
        <LoginForm />
    </div>
  );
}

export default App;
