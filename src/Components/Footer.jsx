import React from "react";
import LogoFooter from '../assets/LogoFooter.svg'
function Footer() {
    return (
        <div className='Footer'>
            <div className="LogoFooter">
                <img src={LogoFooter} alt="" />
            </div>
            <div className="FooterMenu">
                <ul>
                    <li>Партнерам</li>
                    <li>Разработчикам</li>
                    <li>Вакансии</li>
                </ul>
            </div>
            <div className="Copyright">
                <p>“Lincode”, 2023г</p>
            </div>
        </div>
    );
}
export default Footer