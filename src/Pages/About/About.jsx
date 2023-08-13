import './About.css';

import AnIcon from '../../Components/AnIcon/AnIcon';

const About = (props) => {

    return (
        <div className='about'>
            <div className='aboutContainer'>
                <Tito socials={props.socials}/>
                <AboutUs/>
                <Testimonies/>
                <Gallery/>
            </div>
        </div>
    );

};

const Tito = (props) => {
    return (
        <div className='tito'>
            <h1 id="meetTito" style={{"width":"100%","textAlign":"center"}}>Meet Tito</h1>
            <div className='titoInfo'>
                <div className='titoHeader'>
                    <div className='image'>
                        <img src="/titoheadshot.jpg" alt="Picture of Tito" id='tito'/>
                    </div>
                    <h1 id='outsideTitle'>Professional Hairstylist</h1>
                </div>
                <div id='explain'>
                    <h1 id='title'>Professional Hairstylist</h1>
                    <h2>Over a <span id='decade'>Decade</span> of Experience</h2>
                    <h2>Passionate</h2>
                    <h2>Expert Level Care</h2>
                    <h3>for</h3>
                    <h2>Men Women Children</h2>
                    <div className="iconSection" style={{"width":"100%"}}>
                        <div className='iconContainer'>
                            {props.socials.map((icon, index)=> {
                                return (
                                    <AnIcon link={icon.link} social={icon.social} index={index + 'icon'} key={index + 'component'}/>
                                )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AboutUs = () => {
    return (
        <div className='aboutInformation'>
            <div>
                <h1>About Tito's Barbershop</h1>
            </div>
            <div>
                <p>Tito's Professional Barbershop provides high quality salon services for men, women and kids, a unique customer focus, all in a warm, friendly atmosphere. We are a modern design barbershop that focuses on your hair's best experience. </p>
            </div>
        </div>
    )
}

const Testimonies = () => {

    const Testimony = (props) => {
        return (
            <div>
                <div className='testimony'>
                    <div>
                        <div>{props.quote.quote}</div>
                        <h2>-{props.quote.name}</h2>
                    </div>
                </div>
            </div>
        )
    }

    const testimonies = [
        {
            "quote":"Quality cut with an even more quality experience. Even stayed open after hours to ensure the job was done! 5/5 recommend Tito's barbershop", 
            "name":"Trent Azevedo"
        },
        {
            "quote":"Great Business! Tito was very kind and definitely is a master at his craft. 10/10 would recommend!!", 
            "name":"Jules T"
        },
        {
            "quote":"Any one of the barbers do me right! I always do walk -in, so I don't mind waiting if they're busy. Hard to find good latino barbers in Athens, and I'm glad I did with Tito's!", 
            "name":"K M"
        },
        {
            "quote":"Best razor fade I've ever had. Even in the military. No one else is allowed to touch my hair.", 
            "name":"Ernesto Flores"
        },
        {
            "quote":"My barber for years now and never once let me down. Best Barber in town. Clean and sanitized environment. Fade to fullest satisfaction!", 
            "name":"Orlando James"
        },
        {
            "quote":"Top-notch service. I couldn't have been more pleased. I always leave with a big smile on my face and much more relaxed than when I arrived.Best razor fade I've ever had. Even in the military. No one else is allowed to touch my hair.", 
            "name":"Alex Borges"
        },
    ]

    return (
        <div className='testimonies'>
            <div style={{"width":"100%", "textAlign":"center"}}>
                <h1>Testimonies</h1>
            </div>
            <div className='testimoniesContainer'>
                {
                    testimonies.map((quote, index) => {
                        return <Testimony quote={quote} key={"testimony " + index}/>
                    })
                }
            </div>
        </div>
    )
}

const Gallery = () => {

    const photos = [
        {"image":"/haircut1.jpg", "alt":"Cleaned up profile."},
        {"image":"/haircut2.jpg", "alt":"Taper fade into a clean beard."},
        {"image":"/haircut3.jpg", "alt":"Nice fade with accent line."},
        {"image":"/haircut4.jpg", "alt":"Great lineup on a young kid."},
        {"image":"/haircut5.jpg", "alt":"Simple clean fade."},
        {"image":"/haircut6.jpg", "alt":"Clean hairline with beard line."},
        {"image":"/haircut7.jpg", "alt":"Fade on young kid."},
        {"image":"/haircut8.jpg", "alt":"Transitional fade."},
        {"image":"/haircut9.jpg", "alt":"Simple haircut."},
        {"image":"/haircut10.jpg", "alt":"Top cut with a fade."},
        {"image":"/haircut11.jpg", "alt":"Chopped top with a fade into the beard."},
        {"image":"/haircut12.jpg", "alt":"Sweet fade with accent line."},
    ]

    return (
        <div className='gallery'>
            <div>
                <div>
                    <h1>Gallery</h1>
                </div>
                <div>
                    <div className='galleryDisplay'>
                        {
                            photos.map((image, index)=>{
                                return <img src={"/haircuts" + image.image} alt={image.alt} key={"haircut " + index}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;