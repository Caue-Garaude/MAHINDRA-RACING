import React, { useState, useEffect } from 'react';

const UserCard = () => {
    const [isCardVisible, setCardVisible] = useState(false);
    const [userData, setUserData] = useState({ email: '', password: '' });

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (storedEmail && storedPassword) {
            setUserData({ email: storedEmail, password: storedPassword });
        }
    }, []);

    const toggleCardVisibility = () => {
        setCardVisible(!isCardVisible);
    };

    return (
        <div>
            <div className="user" onClick={toggleCardVisibility}>
                <img src="./src/images/customer01.jpg" alt="User" />
            </div>

            {isCardVisible && (
                <div className="user-card">
                    <h3>User Information</h3>
                    <p>Email: {userData.email}</p>
                    <p>Password: {userData.password}</p>
                    <button onClick={toggleCardVisibility}>Close</button>
                </div>
            )}

            <style jsx>{`
                .user-card {
                    position: absolute;
                    top: 60px; /* Ajuste conforme necessário */
                    right: 10px; /* Ajuste conforme necessário */
                    padding: 20px;
                    background: white;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                }
                .user {
                    cursor: pointer; /* Muda o cursor para indicar que é clicável */
                }
            `}</style>
        </div>
    );
};

export default UserCard;
