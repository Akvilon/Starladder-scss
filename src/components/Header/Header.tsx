import * as React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';
import { Tabs } from '../Tabs';


type HeaderProps = {
    children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__inner">
                <div className="header__title">
                    <h1 className="app-h1">Make me up!</h1>
                </div>
                <div className="header__tabs">
                    {children}
                </div>
            </div>
        </header>
    )
}


export { Header };