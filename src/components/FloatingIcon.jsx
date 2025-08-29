import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import icon from "/images/sampleIcon.svg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const FloatingIcon = () => {
    useGSAP(() => {
         
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "main",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                markers: false,
                anticipatePin: 1, // Helps with smoother animations
            },
        });

        tl.to("#ilumination ", {
            backgroundColor: "rgba(255, 253, 203, 0.12)", duration: 150, yoyo: true,
            repeat: 2, // Loop indefinitely
            ease: "power1.inOut"
        })
   
    }, []);

    return (
        <div 
        id="floating-icon"
        className="wrapper"
        style={{
            position: "fixed",
            bottom: "20px",
            right: "40px",
            width: "100px",


            zIndex: 1000,

        }}>


            <div
                id="ilumination"
                className="bg-[rgba(255,253,253,0)] rounded-[4px]" style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "40px",
                    width: "100px",
                    height: "86px",
                    zIndex: 1002,

                }} />
            <img
                src={icon}
                alt="Floating Icon"
                className="floating-icon"

                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "40px",
                    width: "100px",
                    backdropFilter: "blur(100px)",


                    zIndex: 1000,
                    boxShadow: "1px 2px 10px 4px rgba(200, 200, 200, 0.2)",
                }}
            />

        </div>

    );
};

export default FloatingIcon;
