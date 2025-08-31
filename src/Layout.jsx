import Navigation from "./components/Navigation/Navigation.jsx";
import {Routes, Route} from 'react-router-dom';
import QrCodeGenerator from "./components/Generator/QrCodeGenerator.jsx";
import QrCodeScanner from "./components/Scanner/QrCodeScanner.jsx";
import GeneratorHistory from "./components/GeneratorHistory.jsx";
import ScannerHistory from "./components/ScannerHistory.jsx";

const Layout = () => {
    return (
        <div>
            <Navigation/>

            <Routes>
                <Route path='/generator' element={<QrCodeGenerator/>}/>
                <Route path='/scanner' element={<QrCodeScanner/>}/>
                <Route path='/generatorHistory' element={<GeneratorHistory/>}/>
                <Route path='/scannerHistory' element={<ScannerHistory/>}/>
            </Routes>
        </div>
    );
};

export default Layout;