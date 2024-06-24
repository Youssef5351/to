import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css"
import leaves from "../../assets/sma.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faHashtag} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState({
        first_name: false,
        last_name: false,
        email: false,
        password: false,
        confirmation_password: false
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (value.trim() !== '') {
            setTouched({
                ...touched,
                [name]: true
            });
        }
    };
    const handleFocus = (field) => {
        setTouched({
            ...touched,
            [field]: true
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData, {
            });
            if (response.data.success) {
                setError('');
                localStorage.setItem('isAuthenticated', 'true');
                setIsAuthenticated(true);
                navigate('/');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('لقد حدث خطأ رجاءً اعد المحاولة مرة اخري');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login">     
     {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <section className="section-bg-white-login">
                        <aside className="aside-image-container-login">
                             <img src={leaves} alt="" className='aside-image-login' />
                        </aside>
                        <div className='subis'>
                    <span className='in'>دخول</span>
                    <span className='log'> تسجيل</span>
                </div>
                <div className='description1'>
                    <span className='desc-login'>املاً بيانات حسابك الذي قمت بإنشائه</span>
                </div>
                                    <div className="input-group-login">
                                        <label htmlFor="Email" className="input-label-login" style={{ transform: touched.email ? 'translateY(-110%)' : 'none' }}>
                                            <FontAwesomeIcon className='ico-login' icon={faAt} style={{ transform: touched.email ? 'translateY(-20%)' : 'none' }} />
                                            البريد الإلكتروني 
                                        </label>
                                        <input
                                            type="email"
                                            id="Email"
                                            name="email"
                                            className="input-field-login"
                                            value={formData.email}
                                            required
                                            onChange={handleChange}
                                            onFocus={() => setTouched({ ...touched, email: true })}
                                            onBlur={(e) => {
                                                if (!e.target.value.trim()) {
                                                    setTouched({ ...touched, email: false });
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="input-group-login1">
                                        <label htmlFor="Password" className="input-label-login1" style={{ transform: touched.password ? 'translateY(-110%)' : 'none' }}>
                                            <FontAwesomeIcon className='ico-login1' icon={faHashtag} style={{ transform: touched.password ? 'translateY(-20%)' : 'none' }} />
                                            كلمة السر 
                                        </label>
                                        <input
                                            type="password"
                                            id="Password"
                                            name="password"
                                            className="input-field-login1"
                                            value={formData.password}
                                            required
                                            onChange={handleChange}
                                            onFocus={() => setTouched({ ...touched, password: true })}
                                            onBlur={(e) => {
                                                if (!e.target.value.trim()) {
                                                    setTouched({ ...touched, password: false });
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="submit-group-login">
                                    <button type="submit" disabled={loading} className='submit-button-login'>
                                        {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول !'}
                                    </button>
                                        <p className="signup-text">
                                            لا تمتلك حساباً؟
                                            <a href="/sign-up" className="signup-link"> إنشاء حساب! </a>.
                                        </p>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default Login;
