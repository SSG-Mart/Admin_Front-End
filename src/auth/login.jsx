import React from 'react'
import './auth.scss'

export default function login() {
    return (
        <div className="auth">
            <div className="container">
                <div className="mainCard">
                    <div className="left"></div>

                    <div className="right">
                        <form>
                            <h2 className="title">Login</h2>
                            <div className="emailDiv">
                                <label htmlFor="emailInput" id="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="emailInput"
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </div>
                            <div className="passwordDiv">
                                <label htmlFor="passwordInput" id="password">Password</label>
                                <input
                                    type="password"
                                    name="pass"
                                    id="passwordInput"
                                    placeholder="Enter Your Password"
                                    required
                                />
                            </div>
                            <p className="forget-password">Forgot Password</p>
                            <div className="submit"
                                style={{paddingTop:20}}
                            >
                                <button>Login</button>
                            </div>
                            <p className="signUpLink">
                                If you haven't account <a href="/">Sign Up</a>
                            </p>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}
