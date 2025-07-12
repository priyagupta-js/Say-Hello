import react from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import SavePost from './Pages/SavePost/SavePost';
import Profile from './Pages/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <Router>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/savedPosts' element={<SavePost/>} />
          <Route path='/profile' element= {<Profile />} />
        </Routes>
    </Router>
  )
}

export default App
