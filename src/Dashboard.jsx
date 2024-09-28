import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isNavigationActive, setIsNavigationActive] = useState(false);

    const handleMouseOver = (index) => {
        setActiveIndex(index);
    };

    const handleToggle = () => {
        setIsNavigationActive((prev) => !prev);
    };

    

    useEffect(() => {
        // Efeito para adicionar a classe "hovered" ao item ativo
        const items = document.querySelectorAll(".navigation li");
        items.forEach((item, index) => {
            item.classList.remove("hovered");
            if (index === activeIndex) {
                item.classList.add("hovered");
            }
        });
    }, [activeIndex]);

    return (
        <div className="container">
            <div className={`navigation ${isNavigationActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="./src/images/logo1.png" className="logoicon" alt="Logo" />
                            </span>
                        </a>
                    </li>
                    {['Dashboard', 'Friends', 'Stats', 'Rank', 'Store'].map((title, index) => (
                        <li key={index} onMouseOver={() => handleMouseOver(index)}>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name={`${title.toLowerCase()}-outline`}></ion-icon>
                                </span>
                                <span className="title">{title}</span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <NavLink to="/" className="logout">
                            <span className="icon">
                                <ion-icon name="log-out-outline"></ion-icon>
                            </span>
                            <span className="title">Sign Out</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className={`main ${isNavigationActive ? 'active' : ''}`}>
                <div className="topbar">
                    <div className="toggle" onClick={handleToggle}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>

                    <div className="search">
                        <label>
                            <input type="text" placeholder="Search here" />
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>

                    <div className="user">
                        <img src="./src/images/customer01.jpg" alt="User" />
                    </div>
                </div>

                <div className="cardBox">
                    <div className="card">
                        <div>
                            <div className="numbers">2 Dias</div>
                            <div className="cardName">Proxima Corrida</div>
                            <div className="cardName">Bahrein</div>
                        </div>
                        <div className="iconBx">
                            <ion-icon name="car-sport-outline"></ion-icon>
                        </div>
                    </div>

                    <div className="card">
                        <div>
                            <div className="numbers">17,842</div>
                            <div className="cardName">Mahindra Points</div>
                        </div>
                        <div className="iconBx">
                            <ion-icon name="star-outline"></ion-icon>
                        </div>
                    </div>
                </div>

                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Últimas Corridas</h2>
                            <a href="#" className="btn">Ver Todas</a>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <td>Vencedor</td>
                                    <td>Corrida</td>
                                    <td>Data</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { winner: 'Zane Maloney', race: 'Bahrain', date: '29-02 March 2024', status: 'Finalizada' },
                                    { winner: 'Enzo Fittipaldi', race: 'Jeddah', date: '07-09 March 2024', status: 'Finalizada' },
                                    { winner: 'Roman Stanek', race: 'Albert Park', date: '22-24 March 2024', status: 'Finalizada' },
                                    { winner: 'Franco Colapinto', race: 'Enzo e Dino Ferrari', date: '17-19 May 2024', status: 'Finalizada' },
                                    { winner: 'Taylor Barnard', race: 'Circuit de Monaco', date: '23-26 May 2024', status: 'Finalizada' },
                                    { winner: 'Frederik Vesti', race: 'Circuit de Barcelona-Catalunya', date: '21-23 January 2024', status: 'Finalizada' },
                                    { winner: 'Jak Crawford', race: 'Red Bull Ring', date: '28-30 January 2024', status: 'Finalizada' },
                                ].map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.winner}</td>
                                        <td>{order.race}</td>
                                        <td>{order.date}</td>
                                        <td><span className="status delivered">{order.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Friends</h2>
                        </div>

                        <table>
                            {[
                                { name: 'Marcus', status: 'Offline', imgSrc: './src/images/customer02.jpg' },
                                { name: 'João', status: 'Online', imgSrc: './src/images/customer02.jpg' },
                                { name: 'Allan', status: 'Online', imgSrc: './src/images/customer01.jpg' },
                                { name: 'Arthur', status: 'Offline', imgSrc: './src/images/customer01.jpg' },
                                { name: 'Gustavo', status: 'Offline', imgSrc: './src/images/customer02.jpg' },
                            ].map((friend, index) => (
                                <tr key={index}>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <img src={friend.imgSrc} alt={friend.name} />
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            {friend.name} <br />
                                            <span>{friend.status}</span>
                                        </h4>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
