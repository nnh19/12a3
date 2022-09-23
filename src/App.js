import "./App.css";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { useState } from "react";

function App() {
  const [classNameEl,setClassEl] = useState("container");
  const t1 = gsap.timeline({ paused: true });
  const flap = CSSRulePlugin.getRule(".envelope:before");

  t1.to(flap, {
    duration: 0.5,
    cssRule: {
      rotateX: 180,
    },
  })
    .set(flap, {
      cssRule: {
        zIndex: 10,
      },
    })
    .to(".letter", {
      translateY: -200,
      duration: 0.9,
      ease: "back.inOut(1.5)",
    })
    .set(".letter", {
      zIndex: 40,
    })
    .to(".letter", {
      duration: 0.7,
      ease: "back.out(.4)",
      translateY: -5,
      translateZ: 250,
    });

  let t2 = gsap.timeline({ paused: true });
  console.log(t2);
  t2.to(".shadow", {
    delay: 1.4,
    width: 450,
    boxShadow: "-75px 150px 10px 5px #eeeef3",
    ease: "back.out(.2)",
    duration: 0.7,
  });

  const openCard = () => {
    setClassEl("container helo")
    console.log(classNameEl)
    t1.play();
    t2.play();
  };

  const closeCard = () => {
    t1.reverse();
    t2.reverse();
  };

  return (
    <div style={{margin: "500px"}}>
      <div className={classNameEl}>
        <div className="content">
          <div className="envelope" onClick={() => openCard()}></div>
          <div className="letter">
            <div className="bodyLetter">
              <span
                className="close"
                onClick={(event) => {
                  event.stopPropagation();
                  closeCard();
                }}
              >
                x
              </span>
              <div className="message">Họp lớp đi các bạn ơi!!!
              Lớp sắp giải tán đến nơi rồi</div>
            </div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
