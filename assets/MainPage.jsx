import './App.css';
import { Navbar } from './components/Navbar';

function MainPage({ children }) {
    return (
        <div className='MainPage'>
            <Navbar />
            {children}
        </div>
    );
}

export default MainPage;
