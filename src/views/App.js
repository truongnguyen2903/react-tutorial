import logo from './logo.svg';
import './App.scss';
//import Mycomponents from './exp/Mycomponents';
import ListTodo from './todoapp/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Simple Todo app with React 
        </p>
       
        {/* <Mycomponents/>  */} 
        <ListTodo/> 
      </header>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
{/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
