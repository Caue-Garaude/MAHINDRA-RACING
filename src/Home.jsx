import './Home.css';
import './Home.js'


    export default function Home() {
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
                        <a href="#" className="login">Login</a>
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
                        <img src="./src/images/pilot1.png" alt="" className="mySlides" />
                        <img src="./src/images/pilot2.png" alt="" className="mySlides" />
                    </div>
                </div>

                <div id="popup" className="popup">
                    <div className="container__login">
                        <div className="heading">LOGIN</div>
                        <form action="" className="form">
                            <input
                                required=""
                                className="input"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-mail"
                            />
                            <input
                                required=""
                                className="input"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Senha"
                            />
                            <span className="forgot-password"
                            ><a href="#">Esqueceu a senha ?</a></span
                            >
                            <input className="login-button" type="submit" value="Login" />
                            <button className="close-btn">Fechar</button>
                        </form>
                    </div>
                </div>


            </>
        )
    }