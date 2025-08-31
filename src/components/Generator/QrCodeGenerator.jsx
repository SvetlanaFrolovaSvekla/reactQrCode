import {QRCodeSVG} from 'qrcode.react';
import {useState} from "react";
import s from '../../style.module.css';

import {GENERATE_DATA} from '../../consatnts.js';

const QrCodeGenerator = () => {

    // Значение в поле ввода, после нажатия кнопки очищается
    const [valueInput, setValueInput] = useState('');

    // Финальное значение в поле ввода,
    // при изменении поля ввода очищается
    // после нажатия кнопки отдается на генерацию
    const [result, setResult] = useState('');


    // При изменении поля ввода
    const inputOnChange = (event) => {
        setValueInput(event.target.value); // Устанавливаем значение для поля ввода
        setResult(''); // Очищаем финальное значение на генерацию
    }

    // При клике на кнопку генерации
    const onClickGenerationQR = () => {
        // Форматируем дату и время
        const now = new Date();
        const scannedAt = now.toLocaleString(); // Локальная дата и время

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        // Добавляем новый объект
        const newEntry = { valueInput, scannedAt };

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, newEntry])
        );

        setResult(valueInput); // Отдаем финальное значение на генерацию
        setValueInput(''); // Очищаем input
    }

    return (
        <div>
            {/*{(isShowQRCode) ? <QRCodeSVG value="Мой зашифрованный текст"/> : null}*/}
            {(result !== '') ? <>
                    <QRCodeSVG value={result}/>
                    <p>Зашифрованный текст: {result}</p>
                </>
                : null
            }

            <p className={s.label}>Пожалуйста, введите текст:</p>
            <input type="text"
                   className={s.input}
                   value={valueInput}
                   onChange={inputOnChange}
            />
            <button className={s.button}
                    onClick={onClickGenerationQR}
            >Сгенерировать qr-код
            </button>

        </div>
    );
};

export default QrCodeGenerator;