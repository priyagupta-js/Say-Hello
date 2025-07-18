import react from 'react';
import './index.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Homepage from './Pages/Homepage/Homepage';
import SavePost from './Pages/SavePost/SavePost';
import Profile from './Pages/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>
<Router>
  <Navbar/>
  <Layout>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/saved' element={<SavePost/>} />
          <Route path='/profile' element= {<Profile />} />

        </Routes>
        </Layout>
    </Router>
    </>
  )
}

export default App
