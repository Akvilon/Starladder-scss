import * as React from 'react';
import './TabContent.scss';
import watchIcon from '../../assets/watch_icon.svg';
import playerIcon1 from '../../assets/player_icon_1.svg';
import playerIcon2 from '../../assets/player_icon_2.svg';
import playerIcon3 from '../../assets/player_icon_3.svg';
import playerIcon4 from '../../assets/player_icon_4.svg';
import playerIcon5 from '../../assets/player_icon_5.svg';
import playerIcon6 from '../../assets/player_icon_6.svg';
import playerIcon7 from '../../assets/player_icon_7.svg';
import ggbetLogo from '../../assets/ggbet_logo.svg';
import battleIcon from '../../assets/battle_icon.svg';
import battleCupIcon from '../../assets/battle_cup_icon.svg';

type TabContentProps = {
    list: string;
}

enum LIST_TYPES {
    MATCHES = 'matches list',
    BATTLES = 'battles list'
}

const TabContent: React.FC<TabContentProps> = ({ list }) => {

    const renderMatches = () => {
        return (
            <>
                <div className="app-card app-card_online">
                    <div className="app-card__top">
                        <p className="app-caption">Asia Minor: Play-Off</p>
                        <div className="app-card__top__link">
                            <a href="https://www.youtube.com/watch?v=12A2hXdde2s" target='_blank'>
                                <img src={watchIcon} alt="watch now icon" />
                                <p className="app-caption">watch live!</p>
                            </a>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__icons">
                            <img src={playerIcon1} alt="icon" />
                            <img src={playerIcon2} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Albert Warren</h5>
                                <h5 className="app-h5">Gloria Henry</h5>
                            </div>
                            <div className="app-card__content__players__bets">
                                <div>
                                    <p className="app-caption-accent">3.22</p>
                                </div>
                                <div>
                                    <p className="app-caption-accent">53.22</p>
                                </div>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">Bо 3</p>
                            </div>
                            <div className="app-card__body__footer__logo">
                                <img src={ggbetLogo} alt="bet logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-card app-card_upcoming">
                    <div className="app-card__top">
                        <p className="app-caption">Asia Minor: Play-Off</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">29 октября</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__icons">
                            <img src={playerIcon3} alt="icon" />
                            <img src={playerIcon4} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Regina Watson</h5>
                                <h5 className="app-h5">Kathryn Jones</h5>
                            </div>
                            <div className="app-card__content__players__bets">
                                <div>
                                    <p className="app-caption-accent">3.22</p>
                                </div>
                                <div>
                                    <p className="app-caption-accent">53.22</p>
                                </div>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">Starts in: 5 hours 39 min • Bо 3</p>
                            </div>
                            <div className="app-card__body__footer__logo">
                                <img src={ggbetLogo} alt="bet logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card app-card_upcoming">
                    <div className="app-card__top">
                        <p className="app-caption">Asia Minor: Play-Off</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">29 октября</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__icons">
                            <img src={playerIcon2} alt="icon" />
                            <img src={playerIcon5} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Ricardo Hawkins</h5>
                                <h5 className="app-h5">Bruce Simmmons</h5>
                            </div>
                            <div className="app-card__content__players__bets">
                                <div>
                                    <p className="app-caption-accent">3.22</p>
                                </div>
                                <div>
                                    <p className="app-caption-accent">53.22</p>
                                </div>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">Starts in: 5 hours 39 min • Bо 3</p>
                            </div>
                            <div className="app-card__body__footer__logo">
                                <img src={ggbetLogo} alt="bet logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card app-card_upcoming">
                    <div className="app-card__top">
                        <p className="app-caption">Asia Minor: Play-Off</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">29 октября</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__icons">
                            <img src={playerIcon6} alt="icon" />
                            <img src={playerIcon7} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Jenny Bell</h5>
                                <h5 className="app-h5">Arlene Robertson</h5>
                            </div>
                            <div className="app-card__content__players__bets">
                                <div>
                                    <p className="app-caption-accent">3.22</p>
                                </div>
                                <div>
                                    <p className="app-caption-accent">53.22</p>
                                </div>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">Starts in: 5 hours 39 min • Bо 3</p>
                            </div>
                            <div className="app-card__body__footer__logo">
                                <img src={ggbetLogo} alt="bet logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-card app-card_passed">
                    <div className="app-card__top">
                        <p className="app-caption">Asia Minor: Play-Off</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">29 октября</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__icons">
                            <img src={playerIcon1} alt="icon" />
                            <img src={playerIcon3} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5 app-card_passed_defeated">Courtney Alexander</h5>
                                <h5 className="app-h5">Judith Nguyen</h5>
                            </div>
                            <div className="app-card__content__players__score">
                                <h5 className="app-h5 app-card_passed_defeated">0</h5>
                                <h5 className="app-h5">3</h5>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">1:0 • 1:0 • 1:0</p>
                            </div>
                            <div className="app-card__body__footer__logo">
                                <img src={ggbetLogo} alt="bet logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card app-card_passed">
                    <div className="app-card__top">
                        <p className="app-caption">Asia Minor: Play-Off</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">29 октября</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__icons">
                            <img src={playerIcon1} alt="icon" />
                            <img src={playerIcon4} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Priscilla Fisher</h5>
                                <h5 className="app-h5 app-card_passed_defeated">Arlene Black</h5>
                            </div>
                            <div className="app-card__content__players__score">
                                <h5 className="app-h5">3</h5>
                                <h5 className="app-h5 app-card_passed_defeated">0</h5>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">1:0 • 1:0 • 1:0</p>
                            </div>
                            <div className="app-card__body__footer__logo">
                                <img src={ggbetLogo} alt="bet logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card app-card_passed">
                    <div className="app-card__top">
                        <p className="app-caption">Asia Minor: Play-Off</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">29 октября</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__icons">
                            <img src={playerIcon5} alt="icon" />
                            <img src={playerIcon7} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5 app-card_passed_defeated">Cody Howard</h5>
                                <h5 className="app-h5">Brandon Mccoy</h5>
                            </div>
                            <div className="app-card__content__players__score">
                                <h5 className="app-h5 app-card_passed_defeated">0</h5>
                                <h5 className="app-h5">3</h5>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">1:0 • 1:0 • 1:0</p>
                            </div>
                            <div className="app-card__body__footer__logo">
                                <img src={ggbetLogo} alt="bet logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card app-card_passed">
                    <div className="app-card__top">
                        <p className="app-caption">Asia Minor: Play-Off</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">29 октября</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__icons">
                            <img src={playerIcon1} alt="icon" />
                            <img src={playerIcon6} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5 app-card_passed_defeated">Jorge Fox</h5>
                                <h5 className="app-h5">Zack Miles</h5>
                            </div>
                            <div className="app-card__content__players__score">
                                <h5 className="app-h5 app-card_passed_defeated">0</h5>
                                <h5 className="app-h5">3</h5>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">1:0 • 1:0 • 1:0</p>
                            </div>
                            <div className="app-card__body__footer__logo">
                                <img src={ggbetLogo} alt="bet logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const renderBattles = () => {
        return (
            <>
                <div className="app-card app-card_online">
                    <div className="app-card__top">
                        <p className="app-caption">Group Stage</p>
                        <div className="app-card__top__link">
                            <a href="https://www.youtube.com/watch?v=12A2hXdde2s" target='_blank'>
                                <img src={watchIcon} alt="watch now icon" />
                                <p className="app-caption">watch live!</p>
                            </a>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__battleIcon">
                            <img src={battleIcon} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Group A</h5>
                                <h5 className="app-h5">Group B</h5>
                            </div>
                            <div className="app-card__content__players__matchNum">
                                <p className="app-caption-accent">match #1</p>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">Map: Erangel</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-card app-card_upcoming">
                    <div className="app-card__top">
                        <p className="app-caption">Group Stage</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">March 8</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__battleIcon">
                            <img src={battleIcon} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Group A</h5>
                                <h5 className="app-h5">Group B</h5>
                            </div>
                            <div className="app-card__content__players__matchNum">
                                <p className="app-caption-accent">match #2</p>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">Starts in: 5h 39min • Map: Erangel</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card app-card_upcoming">
                    <div className="app-card__top">
                        <p className="app-caption">Group Stage</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">March 8</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__battleIcon">
                            <img src={battleIcon} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Group A</h5>
                                <h5 className="app-h5">Group B</h5>
                            </div>
                            <div className="app-card__content__players__matchNum">
                                <p className="app-caption-accent">match #3</p>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">Starts in: 5h 39min • Map: Erangel</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card app-card_upcoming">
                    <div className="app-card__top">
                        <p className="app-caption">Group Stage</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">March 8</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__battleIcon">
                            <img src={battleIcon} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Group A</h5>
                                <h5 className="app-h5">Group B</h5>
                            </div>
                            <div className="app-card__content__players__matchNum">
                                <p className="app-caption-accent">match #4</p>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <p className="app-caption">Starts in: 5h 39min • Map: Erangel</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="app-card app-card_passed">
                    <div className="app-card__top">
                        <p className="app-caption">Group Stage</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">March 8</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__battleIcon">
                            <img src={battleIcon} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Group A</h5>
                                <h5 className="app-h5">Group B</h5>
                            </div>
                            <div className="app-card__content__players__matchNum">
                                <p className="app-caption-accent">match #5</p>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <img src={battleCupIcon} alt="cup icon" />
                                <p className="app-caption">Natus Vincere (A) - 233pts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card app-card_passed">
                    <div className="app-card__top">
                        <p className="app-caption">Group Stage</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">March 8</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__battleIcon">
                            <img src={battleIcon} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Group A</h5>
                                <h5 className="app-h5">Group B</h5>
                            </div>
                            <div className="app-card__content__players__matchNum">
                                <p className="app-caption-accent">match #6</p>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <img src={battleCupIcon} alt="cup icon" />
                                <p className="app-caption">Natus Vincere (A) - 233pts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card app-card_passed">
                    <div className="app-card__top">
                        <p className="app-caption">Group Stage</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">March 8</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__battleIcon">
                            <img src={battleIcon} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Group A</h5>
                                <h5 className="app-h5">Group B</h5>
                            </div>
                            <div className="app-card__content__players__matchNum">
                                <p className="app-caption-accent">match #7</p>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <img src={battleCupIcon} alt="cup icon" />
                                <p className="app-caption">Natus Vincere (A) - 233pts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-card app-card_passed">
                    <div className="app-card__top">
                        <p className="app-caption">Group Stage</p>
                        <div className="app-card__top__date-time">
                            <h5 className="app-h5">19:00</h5>
                            <p className="app-caption">March 8</p>
                        </div>
                    </div>
                    <div className="app-card__content">
                        <div className="app-card__content__battleIcon">
                            <img src={battleIcon} alt="icon" />
                        </div>
                        <div className="app-card__content__players">
                            <div className="app-card__content__players__names">
                                <h5 className="app-h5">Group A</h5>
                                <h5 className="app-h5">Group B</h5>
                            </div>
                            <div className="app-card__content__players__matchNum">
                                <p className="app-caption-accent">match #8</p>
                            </div>
                        </div>
                        <div className="app-card__body__footer">
                            <div className="app-card__body__footer__info">
                                <img src={battleCupIcon} alt="cup icon" />
                                <p className="app-caption">Natus Vincere (A) - 233pts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className="tab-content">
            {
                list === LIST_TYPES.MATCHES ? renderMatches() : renderBattles()
            }
        </div>
    )
}

export { TabContent };