import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faHashtag, faUserDoctor,faXmark } from '@fortawesome/free-solid-svg-icons';
import rel from "../../assets/comu.jpg";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmation_password: ''
    });

    const [error, setError] = useState('');
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

    if (!formData.first_name || !formData.last_name || !formData.email || !formData.password || !formData.confirmation_password) {
        setError('الرجاء ملأ جميع الفراغات');
        <FontAwesomeIcon icon={faXmark} />
        return;
    }

    if (formData.password !== formData.confirmation_password) {
        setError('كلمة المرور غير مطابقة');
        return;
    }

    try {
        const response = await axios.post('http://localhost:5000/api/signup', formData);
        if (response.data.success) {
            setError('');
            localStorage.setItem('registrationSuccess', 'true');
            navigate('/');
        } else {
            setError(response.data.message);
        }
    } catch (error) {
        if (error.response.status === 400 && error.response.data.message === 'User already registered') {
            setError('انت بالفعل تمتلك حساباً');
        } else {
            setError('لقد حدث خطأ رجاءً اعد المحاولة مرة اخري');
        }
    }
};


    return (
        <div className="sign-up">
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <section className="section-bg-white">
                    <div className="grid-container">
                        <aside className="aside-image-container">
                            <img src={rel} alt="" className='aside-image' />
                        </aside>
                        <main className="main-content">
                            <div className="content-container">
                                <h1 className="welcome-title">اهلاً في مجمع عيادات الكومي</h1>
                                <p className="welcome-description">اعمل حسابك دلوقتي للتسجيل في موقعنا !!</p>
                                <div className="form-container">
                                    <div className="input-group"> 
                                        <label htmlFor="LastName" className="input-label" style={{ transform: touched.last_name ? 'translateY(-110%)' : 'none' }}>
                                            <FontAwesomeIcon className="ico" style={{ transform: touched.last_name ? 'translateY(-20%)' : 'none' }} icon={faUserDoctor} />
                                            الاسم الاخير
                                        </label>
                                        <input
                                            type="text"
                                            id="LastName"
                                            name="last_name"
                                            className="input-field"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            onFocus={() => setTouched({ ...touched, last_name: true })}
                                            onBlur={(e) => {
                                                if (!e.target.value.trim()) {
                                                    setTouched({ ...touched, last_name: false });
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="FirstName" className="input-label" style={{ transform: touched.first_name ? 'translateY(-110%)' : 'none' }}>
                                            <FontAwesomeIcon className='ico' icon={faUserDoctor} style={{ transform: touched.first_name ? 'translateY(-20%)' : 'none' }} />
                                            الاسم الاول
                                        </label>
                                        <input
                                            type="text"
                                            id="FirstName"
                                            name="first_name"
                                            className="input-field"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                            onFocus={() => setTouched({ ...touched, first_name: true })}
                                            onBlur={(e) => {
                                                if (!e.target.value.trim()) {
                                                    setTouched({ ...touched, first_name: false });
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="input-group-full">
                                        <label htmlFor="Email" className="input-label" style={{ transform: touched.email ? 'translateY(-110%)' : 'none' }}>
                                            <FontAwesomeIcon className='ico' icon={faAt} style={{ transform: touched.email ? 'translateY(-20%)' : 'none' }} />
                                            البريد الإلكتروني 
                                        </label>
                                        <input
                                            type="email"
                                            id="Email"
                                            name="email"
                                            className="input-field"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setTouched({ ...touched, email: true })}
                                            onBlur={(e) => {
                                                if (!e.target.value.trim()) {
                                                    setTouched({ ...touched, email: false });
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="PasswordConfirmation" className="input-label" style={{ transform: touched.confirmation_password ? 'translateY(-110%)' : 'none' }}>
                                            <FontAwesomeIcon className='ico' icon={faHashtag} style={{ transform: touched.confirmation_password ? 'translateY(-20%)' : 'none' }} />
                                            تأكيد كلمة السر
                                        </label>
                                        <input
                                            type="password"
                                            id="PasswordConfirmation"
                                            name="confirmation_password"
                                            className="input-field"
                                            value={formData.confirmation_password}
                                            onChange={handleChange}
                                            onFocus={() => setTouched({ ...touched, confirmation_password: true })}
                                            onBlur={(e) => {
                                                if (!e.target.value.trim()) {
                                                    setTouched({ ...touched, confirmation_password: false });
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="Password" className="input-label" style={{ transform: touched.password ? 'translateY(-110%)' : 'none' }}>
                                            <FontAwesomeIcon className='ico' icon={faHashtag} style={{ transform: touched.password ? 'translateY(-20%)' : 'none' }} />
                                            كلمة السر 
                                        </label>
                                        <input
                                            type="password"
                                            id="Password"
                                            name="password"
                                            className="input-field"
                                            value={formData.password}
                                            onChange={handleChange}
                                            onFocus={() => setTouched({ ...touched, password: true })}
                                            onBlur={(e) => {
                                                if (!e.target.value.trim()) {
                                                    setTouched({ ...touched, password: false });
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="submit-group">
                                        <button className="submit-button">أنشئ حسابك !</button>
                                        <p className="login-text">عندك حساب؟
                                            <a href="#" className="login-link">تسجبل دخول</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default SignUp;
