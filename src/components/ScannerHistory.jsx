import {SCAN_DATA} from '../consatnts.js';
import {QRCodeSVG} from 'qrcode.react';

const ScannerHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

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

export default ScannerHistory;