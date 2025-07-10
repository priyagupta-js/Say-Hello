import react from 'react';

import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import SavePost from './Pages/SavePost/SavePost';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/savedPosts' element={<SavePost/>} />
        </Routes>
    </Router>
  )
}

export default App
