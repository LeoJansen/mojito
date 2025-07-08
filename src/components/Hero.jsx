import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const videoRef = useRef()
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'words, chars' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars, {
            yPercent: 200,
            opacity: 0.02,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06
        });

        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            opacity: 0.02,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                
            }
        })
        .to('.right-leaf', { y: 200}, 0)
        .to('.left-leaf', { y: -200}, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%'
        const endValue = 'bottom top'

        // Video scroll animation timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
                
        
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
              
            })
        }

    }, []);

    return (
        <>
            <section id="hero" className="noisy" >
                <h1 className="title">Mojito</h1>
                <img src="/images/hero-left-leaf.png" alt="left -leaf" className="left-leaf" />
                <img src="/images/hero-right-leaf.png" alt="left -leaf" className="right-leaf" />
                <div className="body">
                    <div className="content">
                        <div className="space-y-5 md:block">
                            <p>Cool. Crispc Classic.</p>
                            <p className="subtitle">Sip the Spirit <br />of Summer</p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                            </p>
                            <a href="#cocktails" className="btn btn-primary">View Cocktails</a>

                        </div>

                    </div>

                </div>

            </section>
            <div className="video absolute inset-0 ">
                <video ref={videoRef} src="videos/output.mp4" muted playsInline preload="auto" loop/>

            </div>
        </>
    )
}

export default Hero