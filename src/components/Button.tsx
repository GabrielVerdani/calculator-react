interface IButtonProps {
    color: string;
    text: string;
    name: string;
    handleButtonClick: (button: string) => void;
}

export function Button(button: IButtonProps) {
    return (
        <div className={`button ${button.color}`} onClick={() => button.handleButtonClick(button.name)}>
            {button.text}
        </div>
    )
}