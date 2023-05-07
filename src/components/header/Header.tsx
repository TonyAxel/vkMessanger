import React, {FC} from 'react';
const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__left">
                    <div className="header__logo">
                        <h2>Мессенджер</h2>
                    </div>
                    <div className="header__search">
                        <input type="text" placeholder="Поиск" />
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__user header--user">
                        <div className="header--user__photo">
                            <img src="http://klublady.ru/uploads/posts/2022-07/1658631819_57-klublady-ru-p-face-reper-tatu-na-litse-foto-59.jpg" alt=""/>
                        </div>
                        <div className="header--user__name">
                            <p>Иван</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
