import { Button } from './Button';
import { buttonsData } from '../assets/buttonsData'

interface IButtonContainerProps {
    handleButtonClick: (button: string) => void;
}

export function ButtonsContainer({handleButtonClick}: IButtonContainerProps) {
    return (
        <div className="buttons-container">
            {buttonsData.map(button => {
                return (
                    <Button    
                        key={button.id} 
                        color={button.color} 
                        text={button.text}
                        name={button.name}
                        handleButtonClick={handleButtonClick}
                    />
                )
            })}
        </div>
    )
}