import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import icon from "../../public/images/sampleIcon.svg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FloatingIcon = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "main",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                markers: false,
            },
        });

        tl.to(".floating-icon", { y: "random(-15, 15)", x: "random(-15, 15)",  yoyo: true, duration: 150, ease: "power1.inOut" });
        tl.to(".floating-icon", { y: "random(15, -15)", x: "random(15, -15)",  yoyo: true, duration: 150, ease: "power1.inOut" });
    }, []);

    return (
        <img
            src={icon}
            alt="Floating Icon"
            className="floating-icon"

            style={{
                position: "fixed",
                bottom: "20px",
                right: "40px",
                width: "100px",
                
                zIndex: 1000,
                boxShadow: "2px 2px 10px 3px rgba(200, 200, 200, 0.2)",
            }}
        />
    );
};

export default FloatingIcon;
