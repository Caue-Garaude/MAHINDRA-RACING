import React, { useEffect, useState } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const correctUsername = 'admin@email.com';
    const correctPassword = '123321';

    // Função para abrir o popup
    const openPopup = () => {
        setIsOpen(true);
    };

    // Função para fechar o popup
    const closePopup = () => {
        setIsOpen(false);
    };

    // Função de envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.email.value;
        const password = event.target.password.value;

        // Verificar dados de login
        if (username === correctUsername && password === correctPassword) {
            alert('Login bem-sucedido!');
            closePopup();
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    };

    // Efeito para mostrar os slides
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 2); // Supondo que você tenha 2 slides
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <header className="header">
                <div className="logoheader">
                    <img src="./src/images/logo1.png" alt="" className="logo" />
                </div>

                <div className="loginheader"></div>

                <nav className="navbar">
                    
                    <a href="#">News</a>
                    <a href="#">Team</a>
                    <a href="#">Tickets</a>
                    <a href="#">Races</a>
                    <NavLink to="/dashboard" className="login">Login</NavLink>
                </nav>
            </header>

            <div className="content">
                <div className="content-text">
                    <h1>MAHINDRA RACING NOW</h1>
                    <p>
                        Bem-vindo ao Mahindra Challenge, a mais recente inovação da Mahindra
                        Racing que transforma a maneira como você acompanha as emocionantes
                        corridas de Fórmula E. Nosso objetivo é proporcionar uma experiência
                        única e interativa, conectando fãs de todo o mundo e oferecendo
                        recursos que enriquecem cada momento das corridas.
                    </p>
                    <h1>Nossa Missão</h1>
                    <p>
                        No Mahindra Challenge, nossa missão é levar a adrenalina das corridas
                        de Fórmula E diretamente até você, onde quer que esteja. Queremos que
                        cada fã se sinta parte integrante da ação, com acesso direto a
                        transmissões ao vivo, estatísticas detalhadas e uma comunidade
                        vibrante de entusiastas.
                    </p>
                </div>
                <div className="content-image">
                    <img
                        src="./src/images/pilot1.png"
                        alt=""
                        className="mySlides"
                        style={{ display: slideIndex === 0 ? 'block' : 'none' }}
                    />
                    <img
                        src="./src/images/pilot2.png"
                        alt=""
                        className="mySlides"
                        style={{ display: slideIndex === 1 ? 'block' : 'none' }}
                    />
                </div>
            </div>

            {isOpen && (
                <div id="popup" className="popup">
                    <div className="container__login">
                        <div className="heading">LOGIN</div>
                        <form onSubmit={handleSubmit} className="form">
                            <input
                                required
                                className="input"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-mail"
                            />
                            <input
                                required
                                className="input"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Senha"
                            />
                            <span className="forgot-password">
                                <a href="#">Esqueceu a senha ?</a>
                            </span>
                            <input className="login-button" type="submit" value="Login" />
                            <button type="button" className="close-btn" onClick={closePopup}>
                                Fechar
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
