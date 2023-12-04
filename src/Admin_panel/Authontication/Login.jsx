import React, { useState } from 'react';
import '../Authontication/Login.scss';
import instance from '../../config/axiosConfig';

export default function Login({setTrigger}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await instance.post('/api/admin/login', {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                setTrigger(prv=>!prv)
            }


        } catch {
            alert("Please Enter The Correct Email and Password !!")
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='login-container'>
            <div className="login-card-container">
                <div className="card-header">
                    <h1 style={{ color: 'red' }}>SSG Mart</h1>
                </div>
                <div className="body-section">
                    <form onSubmit={handleSubmit}>
                        <div className="title">
                            <h2 style={{ marginTop: '10px' }}>Admin Login</h2>
                        </div>
                        <div className="input-feild-container">
                            <div className='label-container'>
                                <label htmlFor="email">User Name</label>
                            </div>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-feild-container">
                            <div className='label-container'>
                                <label htmlFor="password">Password</label>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Enter the password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="submitButton">
                            <input type="submit" value={loading ? 'Logging in...' : 'Login'} disabled={loading} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
