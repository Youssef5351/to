
import React, { useState ,useRef , useEffect } from "react";
import "./Master.css";
import kom from "../../assets/iphone.png";
import face from "../../assets/macbook.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import leh from "../../assets/leh.png";

const Master = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const questionsAnswers = [
    {
      question: (
        <svg className="what" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      ),
      answer: (
        <div className="edit">
          <span className="ans">تقدر عشان تحجز موعد عندنا تتصل او تبعت رسالة نصية علي رقم الواتس بتعنا</span>
          <img src={kom} className="kom" alt="" />
          <div className="pat">
            <span className="ans">من خلال رقم التليفون 01234567891 </span>
          </div>
          <div className="direct">
          <span className="open">احنا دلوقتي بنوفر <span className="serv">خدمة</span> دائمة علي الواتس اب للاستفسار علي اي سؤال طبي</span>
          </div>
          <div className="final">
            <span className="jo">مهمتنا نساعدك في اي وقت #</span>
          </div>
        </div>
      )
    },
    {
      question: (
        <svg className="face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
        </svg>
      ),
      answer: (
        <div className="main">
            <span className="cont"> تابع صفحتنا اول بأول هناك هتعرف التخصصات الجديدة اللي اتضافت</span>
            <span className="zer">ومزايا اكتر كتير</span>
            <img src={face} className="sore" alt="" />
            <a href="https://www.facebook.com/ElkoumiClinics" target="_blank">
              <FontAwesomeIcon icon={faFacebook} bounce size="2xl" className="icon" style={{color: "#2168e4",}} />
            </a>
            <span className="ser">مع دكاترة خبرة عالية و متميزة</span>
        </div>
      )
    },
    {
      question: (
        <svg className="mess" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"
          />
        </svg>
      ),
      answer: (
        <div className="lock">
    <span className="vola">
    <FontAwesomeIcon className="vv" icon={faFacebookMessenger} /> Messenger خدمتنا متوفرة 24 ساعة لاي استفسار طبي  علي تطبيق
    <img src={leh} className="leh" alt="" />
    </span>
        </div>
      )
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="space">
      <span className="dso">اتعرف علينا</span>
      <div className="ask">
        <span className={`alet ${isVisible ? 'visible' : ''}`} ref={textRef}>
          <span className="green whr">المجمع</span> <span className="whr">علي</span> <span className="whr">اتصل</span>
        </span>
        <span className={`fro ${isVisible ? 'visible' : ''}`} ref={textRef}>!! واحنا في خدمتك في اي وقت</span>
      </div>
      <div className="faq-container">
        {questionsAnswers.map((qa, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">{qa.question}</div>
            {activeIndex === index && <div className="faq-answer">{qa.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Master;
