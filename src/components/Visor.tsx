interface IVisor {
    currentNumber: string;
    lastEquation: string;
}

export function Visor({currentNumber, lastEquation}: IVisor) {
    return (
        <div className="visor">
            <p>{lastEquation}</p>
            <h1>{currentNumber}</h1>
        </div>
    )
}