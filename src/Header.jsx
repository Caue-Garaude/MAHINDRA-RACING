import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import './images/logo1.png'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // Define se o formulário é de login ou cadastro
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

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
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (isLogin) {
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                alert('Login bem-sucedido!');
                closePopup();
                navigate('/dashboard'); // Redireciona para a Dashboard
            } else {
                alert('Usuário ou senha incorretos.');
            }
        } else {
            // Salvar os dados de cadastro no localStorage
            const newUser = { email, password };
            localStorage.setItem('user', JSON.stringify(newUser));
            alert('Cadastro bem-sucedido! Agora faça o login.');
            setIsLogin(true); // Alterna para o modo de login após cadastro
        }
    };

    // Alternar entre login e cadastro
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    // Alternar menu de hambúrguer
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className="header">
                <div className="logoheader">
                    <NavLink to="/"><img src="/src/Images/logo1.png" alt="" className="logo" /></NavLink>
                </div>

                {/* Botão de hambúrguer */}
                <button className="menu-btn" onClick={toggleMenu}>☰</button>

                <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                    <NavLink to="/news">Notícias</NavLink>
                    <NavLink to="/teams">Times</NavLink>
                    <NavLink to="/tickets">Ingressos</NavLink>
                    <NavLink to="/races">Corridas</NavLink>
                    <NavLink onClick={openPopup} className="login">Login</NavLink>
                </nav>

                {/* Popup de login/cadastro */}
                {isOpen && (
                    <div id="popup" className="popup">
                        <div className="container__login">
                            <div className="heading">{isLogin ? 'LOGIN' : 'CADASTRO'}</div>
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
                                <input
                                    className="login-button"
                                    type="submit"
                                    value={isLogin ? 'Login' : 'Cadastrar'}
                                />
                                <button type="button" className="toggle-btn" onClick={toggleForm}>
                                    {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
                                </button>
                                <button type="button" className="close-btn" onClick={closePopup}>
                                    Fechar
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
