import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  ShowUser from './components/ShowUser';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<ShowUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
