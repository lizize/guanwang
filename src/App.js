import logo from './logo.svg';
import './App.css';

import Home from './page/home';
import About from './page/about'
import Research from './page/research'
import Layout from './layout';
import { Route ,Routes,Navigate} from 'react-router-dom';

function App() {

  return (
    // <div className="App">
    //     <Home></Home>
    //     {/* <About></About> */}
      //  <Research></Research> */}
        
    // </div>
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/' element={<Navigate to={'/home'}></Navigate>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/research' element={<Research></Research>}></Route>
        </Route>
    </Routes>
  );
}

export default App;


