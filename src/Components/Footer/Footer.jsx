import React ,{useState} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    const [formData, setFormData] = useState({
        email: ''
    });

    const [touched, setTouched] = useState({
        email: false
    });
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

        if (!formData.email) {
            setError('All fields are required');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000', formData);
            if (response.data.success) {
                setSuccess('ok');
                setError('');
            } else {
                setError(response.data.message);
                setSuccess('');
            }
        } catch (error) {
            setError('You Already Signed Up');
            setSuccess('');
        }
    };
  return (
    <footer className="footer">
      <div className="footer-content">
        <legend className='text'>اشترك دلوقتي واعمل حسابك عشان تعرف اخر التجديدات</legend>
        <legend className='text2'>هتلاقينا دايماً موجودين علي اي منصة من منصات التواصل الاجتماعي</legend>
        <legend className='text3'>وتقدر تزورنا في المجمع</legend>
        <div className="input-group-full1">
    <label htmlFor="Email" className="input-label1" style={{ transform: touched.email ? 'translateY(-110%)' : 'none' }}>
        البريد الإلكتروني 
    </label>
    <input
        type="email"
        id="Email"
        name="email"
        className="input-field1"
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
<div className="m2">
    <a href="https://www.facebook.com/ElkoumiClinics">
<FontAwesomeIcon className='me' icon={faFacebook} />
</a>
<a href="tel:201279994003">
<FontAwesomeIcon className='me1' icon={faWhatsapp} />
</a>
</div>
<div className='ka'>
    <span className='fin'>©2024 Elkoumi-Clinics, Inc. All rights reserved.</span>
</div>
      </div>
    </footer>
  );
};

export default Footer;
