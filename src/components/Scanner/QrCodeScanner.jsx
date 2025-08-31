import {Scanner} from '@yudiel/react-qr-scanner';
import {useState} from 'react';
import {QRCodeSVG} from 'qrcode.react';

import {SCAN_DATA} from '../../consatnts.js';

const QrCodeScanner = () => {
    const [result, setResult] = useState('');

    // finder - красная облатсь захвата камеры
    const settings = {
        audio: false,
        finder: false,
    };

    const stylesSettings = {
        container: {width: 300}
    };

    const scanHandler = (result) => {
        const value = result[0].rawValue;
        setResult(value);

        // Форматируем дату и время
        const now = new Date();
        const scannedAt = now.toLocaleString(); // Локальная дата и время

        // Получаем прошлые данные
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        // Добавляем новый объект
        const newEntry = { value, scannedAt };

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, newEntry])
        );
    };

    return (
        <div>
            {/*allowMultiple - чтоб отсканировать можно было несколько раз, увидеть данные в консоле
                components - прнимает настройки*/}
            <Scanner
                onScan={scanHandler}
                /*allowMultiple*/
                components={settings}
                styles={stylesSettings}
            />

            {(result !== '') ? <>
                    <a href={result}>{result}</a>
                    <QRCodeSVG value={result}/>
                </>
                : null
            }

        </div>
    );
};

export default QrCodeScanner;