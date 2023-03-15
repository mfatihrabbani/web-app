import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import ForgotPassword from './FotgotPassword';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/forgot" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;