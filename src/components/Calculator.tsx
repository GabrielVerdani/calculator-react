import { useState } from 'react';

import { ButtonsContainer } from './ButtonsContainer';
import { Visor } from './Visor';

import '../styles/calculator.scss';

interface ICalculatorProps {
    isDarkMode: boolean;
}

export function Calculator({isDarkMode}: ICalculatorProps) {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [lastEquation, setLastEquation] = useState("");
    const [lastNumber, setLastNumber] = useState(0);
    const [isAfterOperation, setIsAfterOperation] = useState(false);
    const [isAfterEqual, setIsAfterEqual] = useState(false);

    const handleButtonClick = (button: string) => {
        switch (button) {
            case "addition":
                handleSum();
                break;
            case "subtraction":
                handleSubtraction();
                break;
            case "multiplication":
                handleMultiplication();
                break;
            case "division":
                handleDivision();
                break;
            case "equal":
                handleEqual();
                break;
            case "backspace": 
                handleBackspace();
                break;
            case "clearAll":
                handleClearAll();
                break;
            case "clear":
                handleClear();
                break;
            case "reverse":
                handleReverse();
                break;
            default:
                handleOtherButtons(button);
                break;
        }
    }

    const handleOtherButtons = (button: string) => {
        if(isAfterOperation) {
            setIsAfterOperation(false);
            if(button == ".") {
                return;
            }
            if(isAfterEqual) {
                setIsAfterEqual(false);
                setLastEquation("");
            }
            setCurrentNumber(button);
            return
        }
        if(currentNumber == "0" && button != ".") {
            setCurrentNumber(button);
            return;
        }
        if(button == "." && currentNumber.includes(".")) {
            return;
        }
        if(currentNumber.length >= 11) {
            let newNumber = currentNumber.substring(1) + button;
            setCurrentNumber(newNumber);
            return
        }

        setCurrentNumber(currentNumber + button);
    }

    const handleSum = () => {
        if(currentNumber == "0" && lastEquation.includes("/")) {
            setLastEquation(lastNumber + " + ");
            return
        }
        if(isAfterOperation) {
            setIsAfterEqual(false);
            setLastEquation(currentNumber + " + ")
            return;
        }
        let result = eval(lastEquation + currentNumber);
        setLastEquation(result + " + ");
        setLastNumber(result);
        setCurrentNumber(result.toString());

        setIsAfterOperation(true);
    }

    const handleDivision = () => {
        if(currentNumber == "0") {
            alert("Cannot divide to zero")
            setIsAfterEqual(false);
            setIsAfterOperation(false);
            return;
        }
        if(isAfterOperation) {
            setIsAfterEqual(false);
            setLastEquation(currentNumber + " / ")
            return;
        }
        let result = eval(lastEquation + currentNumber);
        setLastEquation(result + " / ");
        setLastNumber(result);
        setCurrentNumber(result.toString());

        setIsAfterOperation(true);
    }

    const handleMultiplication = () => {
        if(currentNumber == "0" && lastEquation.includes("/")) {
            setLastEquation(lastNumber + " * ");
            return
        }
        if(isAfterOperation) {
            setIsAfterEqual(false);
            setLastEquation(currentNumber + " * ")
            return;
        }
        let result = eval(lastEquation + currentNumber);
        setLastEquation(result + " * ");
        setLastNumber(result);
        setCurrentNumber(result.toString());

        setIsAfterOperation(true);
    }

    const handleSubtraction = () => {
        if(currentNumber == "0" && lastEquation.includes("/")) {
            setLastEquation(lastNumber + " - ");
            return
        }
        if(isAfterOperation) {
            setIsAfterEqual(false);
            setLastEquation(currentNumber + " - ")
            return;
        }
        let result = eval(lastEquation + currentNumber);
        setLastEquation(result + " - ");
        setLastNumber(result);
        setCurrentNumber(result.toString());

        setIsAfterOperation(true);
    }

    const handleEqual = () => {
        if(currentNumber == "0" && lastEquation.includes("/")) {
            alert("Cannot divide to zero")
            setIsAfterEqual(false);
            setIsAfterOperation(false);
            return;
        }
        if(isAfterOperation) {
            return;
        }
        let finalEquation = lastEquation + currentNumber + " =";
        let result = eval(lastEquation + currentNumber)
        setLastEquation(finalEquation)
        setCurrentNumber(result.toString());
        setLastNumber(result);

        setIsAfterOperation(true);
        setIsAfterEqual(true);
    }

    const handleBackspace = () => {
        if(isAfterEqual) {
            setCurrentNumber("0");
            setLastEquation("")
            setIsAfterEqual(false);
            setIsAfterOperation(false);
            return
        }
        if(isAfterOperation) {
            setCurrentNumber("0");
            setIsAfterOperation(false);
            return
        }
        let updatedNumber = currentNumber.slice(0, currentNumber.length - 1);
        if(updatedNumber == "" || updatedNumber == "-") {
            setCurrentNumber("0");
            return;
        }
        setCurrentNumber(updatedNumber);
    }

    const handleClearAll = () => {
        setCurrentNumber("0");
        setLastEquation("");
        setLastNumber(0);
        setIsAfterOperation(false);
        setIsAfterEqual(false);
    }

    const handleClear = () => {
        if(isAfterEqual) {
            setLastEquation("")
            setIsAfterEqual(false);
        }
        setCurrentNumber("0");
        setIsAfterOperation(false);
    }

    const handleReverse = () => {
        let result = (parseFloat(currentNumber) * -1).toString()
        setCurrentNumber(result);
    }
    
    return (
        <div className={`calculator ${isDarkMode? "dark" : ""}`}>
            <Visor currentNumber={currentNumber} lastEquation={lastEquation}/>
            <ButtonsContainer handleButtonClick={handleButtonClick} />
        </div>
    )
}