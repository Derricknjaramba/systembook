import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admindashelp from './context/Admindashhelp';
import Adminfeedback from './context/Adminfeedback';
import Adminhelp from './context/Adminhelp';

function App() {
    return (
      <Router >
        <Routes>
          <Route path="/" element={<Admindashelp />} />
          <Route path="/adminfeedback" element={<Adminfeedback />} />
          <Route path="/adminhelp" element={<Adminhelp />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;

