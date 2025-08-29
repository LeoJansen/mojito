import { useGSAP } from '@gsap/react'
import { openingHours, socials } from '../../constants'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#contact h2", { type: "words" });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
            },
            ease: "power1.inOut",


        });

        timeline.from(titleSplit.words, {
            y: 100,
            opacity: 0,
            stagger: 0.2,

        })
            .from("#contact h3, #contact p", {
                y: 100,
                opacity: 0,
                stagger: 0.2,

            }, "-=0.3")
            .to("#f-right-leaf", {
                y: -50,
                duration: 1,
                yoyo: true,
                repeat: 2,
                ease: "power1.inOut",
            })
            .to("#f-left-leaf", {
                y: -50,
                duration: 1,
                yoyo: true,
                repeat: 2,
                ease: "power1.inOut",
            }, "<");
    })
    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="Right Leaf" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="Left Leaf" id="f-left-leaf" />

            <div className='content'>
                <h2>Where to find us</h2>
                <div>
                    <h3>Visit our bar</h3>
                    <p>123 Mojito Lane, Cocktail City, CC 12345</p>
                </div>



                <div className=''>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time, index) => (
                        <p key={index}>{time.day} : {time.time}</p>
                    ))}

                </div>

                <div>
                    <h3>Follow us on social media:</h3>
                    <div className='flex-center gap-5'>
                        {socials.map((social, index) => (
                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}

                    </div>

                </div>


                <p>We look forward to serving you!</p>
            </div>
        </footer>
    )
}

export default Contact