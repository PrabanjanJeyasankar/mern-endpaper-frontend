import './App.css';
import PatientInputComponent from './Components/Routes/patientInput.jsx/PatientInputComponent';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <ul>
        <Link to='/addPatient'><h3 className="p-8  pl-5 pr-5 pt-2 pb-2  m-2 mt-6 mb-6 hover:bg-white hover:text-gray-800 hover:rounded-full">Add Patient</h3></Link>
        </ul>
        <Routes>
        <Route exact path='/addPatient' element ={<PatientInputComponent/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
