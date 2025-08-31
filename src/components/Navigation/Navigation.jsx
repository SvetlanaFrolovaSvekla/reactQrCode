import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav style={{display: 'flex', flexDirection: 'column'}}>
            <Link to='/generator'>Генерировать QR-код</Link>
            <Link to='/scanner'>Сканировать QR-код</Link>
            <Link to='/generatorHistory'>История генераций</Link>
            <Link to='/scannerHistory'>История сканирования</Link>
        </nav>
    );
};

export default Navigation;