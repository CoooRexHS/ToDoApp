import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import ToDoInput from './components/ToDoInput';

const App = () => {
  return (
    <div>
      <h1>TO DO</h1>
      <ToDoInput />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
