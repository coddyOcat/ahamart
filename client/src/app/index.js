import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { BranchDetailScreen, HomeScreen, LoginScreen, RegisterScreen, UserScreen } from "../screens"

import '../style/index.sass'

const App = () => {
    
    return (
        <BrowserRouter >
            <Routes>
                <Route exact path="/" element={<HomeScreen/>} />
                <Route path="/branch" element={<BranchDetailScreen/>} />
                <Route path="/login" element={<LoginScreen/>} />
                <Route path="/register" element={<RegisterScreen/>} />
                <Route path="/user/:id" element={<UserScreen/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App