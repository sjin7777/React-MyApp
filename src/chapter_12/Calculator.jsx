import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

// 섭씨온도 => 화씨온도
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// 화씨온도 => 섭씨온도
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);

    // 만약 숫자가 아닌 값을 입력하면 ''를 리턴하도록 예외 처리
    if(Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}


function Calculator(props) {
    // state로 temperature, scale을 선언하여 온도값과 단위를 각각 저장
    // 이 온도와 단위를 이용하여 변환함수를 통해 섭씨온도와 화씨온도를 구해서 사용
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    const celsius = (scale === 'f') ? (tryConvert(temperature, toCelsius)) : temperature;
    const fahrenheit = (scale === 'c') ? (tryConvert(temperature, toFahrenheit)) : temperature;

    return (
        <div>
            {/* 각 단위로 변환된 온도값과 단위를 props로 넣어주었고, 값이변경되었을 때, 업데이트하기 위한 함수를 onTemperatureChange에 넣어줌
                그렇기에 섭씨온도가 변경되면 단위가 c로 변경되고, 화씨온도가 변경되면 단위가 f로 변경됨 */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    )
}


export default Calculator;