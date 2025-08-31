import {GENERATE_DATA} from '../consatnts.js';
import {QRCodeSVG} from 'qrcode.react';


const GeneratorHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <p><strong>Скан:</strong> {item.value}</p>
                    <p><em>Время:</em> {item.scannedAt}</p>
                    <QRCodeSVG value={item.value} />
                </div>
            ))}
        </div>
    );
};

export default GeneratorHistory;