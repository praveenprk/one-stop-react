import Header from './partials/header/Header';
import Footer from './partials/footer/Footer';
import './App.css';
import { useDispatch } from 'react-redux';
import { initAppDB } from './features/todo/todoSlicer';

function App() {
  
  const dispatch = useDispatch();
  dispatch(initAppDB());
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;