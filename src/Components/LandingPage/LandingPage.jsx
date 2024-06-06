import React,{ useEffect } from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";
import elk from "../../assets/Elkoumi.png"

const LandingPage = () => {
    useEffect(() => {
        const InjectCursorPositon = ({x , y}) => {
          document.documentElement.style.setProperty('--x' , Math.round(x))
          document.documentElement.style.setProperty('--y' , Math.round(y))
        };
        document.body.addEventListener('pointermove' , InjectCursorPositon)

      }, []);

    return (
        <section className="landing">

            <div className="greeting">
              أطمن علي صحتك
            </div>
            <span className="hest">
                معانا صحتك هتبقي تمام
            </span>
            <motion.hr
                style={{ width: "30%", height: "3px", backgroundColor: "#fb7185", transform: "translateX(275px)", marginTop: "16px" }}
                initial={{ opacity: 0, width: "0%" }}
                animate={{ opacity: 1, width: "30%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            />
    <div className="desc">
      اطمن دلوقتي علي نفسك مع مجمع عيادات الكومي مع دكاترة خبرة اكثر من 15 سنة
    </div>
    <a href="#reservation">
               <div className="button">
               <svg xmlns="http://www.w3.org/2000/svg" className="hospital" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m2.5 14c0-.828-1.79-1.5-4-1.5s-4 .672-4 1.5S9.79 19 12 19c1.657 0 3 .672 3 1.5S13.657 22 12 22c-1.285 0-2.381-.404-2.809-.972M12 5v11m-5.204-4.051C4.781 13.654 2.834 10.742 2 8.726c.883 0 2.72-.554 4.429-2.5c.746-.849 1.119-1.274 1.33-1.222c.21.052.498.688 1.075 1.96c.893 1.965 2.233 2.998 3.166 3.374c-2.4 3.867-4.47 2.685-5.204 1.611m0 0c.295-.25.592-.598.886-1.063m9.522 1.063c2.015 1.705 3.962-1.207 4.796-3.223c-.883 0-2.72-.554-4.429-2.5c-.746-.849-1.119-1.274-1.33-1.222c-.21.052-.498.688-1.075 1.96c-.893 1.965-2.233 2.998-3.166 3.374c2.4 3.867 4.47 2.685 5.204 1.611m0 0c-.295-.25-.592-.598-.886-1.063" color="white"/></svg>
                    احجز دلوقتي
                </div>
                </a>

                {/* End Of Left Side */}
<section className="c">
    <p className="why">اكشف عند</p>
    <div className="par">
        <img className="elk" src={elk} alt="" />
    </div>
    <p className="sec">مجمع عيادات الكومي</p>
</section>

<section className="c1">
    <p className="why1">اكتر من</p>
    <div className="par1">
        <span className="elk1">8 تخصصات</span>
    </div>
    <p className="sec1">مختلفة</p>
</section>

<section className="c2">
    <p className="why2">جاهزين في اي</p>
    <div className="par2">
        <span className="elk2">وقت</span>
    </div>
    <p className="sec2">في استقبالك</p>
</section>

<section className="c3">
    <div className="par3">
        <span className="elk3">مجمع عيادات الكومي</span>
    </div>
</section>
        </section>
    );
};

export default LandingPage;