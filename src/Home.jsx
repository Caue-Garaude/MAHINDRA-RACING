import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from './Header';
const pilot1 = '/images/pilot1.png';
const pilot2 = '/images/pilot2.png';

export default function Home() {
    const [slideIndex, setSlideIndex] = useState(0);

    // Efeito para alternar os slides
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 2); // Alterna entre 0 e 1
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Array de imagens dos pilotos
    const pilots = [pilot1, pilot2];

    return (
        <>
            <Header/>
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
                    <img className="mySlides" src={pilots[slideIndex]} alt={`Pilot ${slideIndex + 1}`} />
                </div>
            </div>
        </>
    );
}
