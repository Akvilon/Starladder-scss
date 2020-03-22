import * as React from 'react';

type ButtonProps = {
    type: any;
    title: string;
    isSelected: boolean;
    index: number;
    handleTabClick: (index: number) => void;
}

const Button: React.FC<ButtonProps> = ({ isSelected, type, index, title, handleTabClick }) => {

    return (
        <button
            className={isSelected ? 'app-button app-button--active' : 'app-button'}
            type={type}
            onClick={() => handleTabClick(index)}
        >{title}
        </button>
    )
}

export { Button };