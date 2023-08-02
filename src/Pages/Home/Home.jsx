import './Home.css';
import { useState } from 'react'

import { Icon } from '@iconify/react';

import '@fontsource/merriweather/';


const Home = () => {
    return (
        <div className='home'>
            <Tito/>
            <div className='homeContainer'>
                <div className='homeGrid'>
                    <div className='columns' id='leftColumn'>
                        <Services/>
                    </div>
                    <div className='columns' id='rightColumn'>
                        <Hours/>
                    </div>
                </div>
            </div>
            <Locations/>
        </div>
    );

};

const Hours = () => {

    const times = [
        {"day":"Sunday", "time":"Closed", "closed":true},
        {"day":"Monday", "time":"9:00am-5:00pm"},
        {"day":"Tuesday", "time":"9:00am-5:00pm"},
        {"day":"Wednesday", "time":"9:00am-5:30pm"},
        {"day":"Thursday", "time":"9:00am-5:00pm"},
        {"day":"Friday", "time":"9:00am-5:00pm"},
        {"day":"Saturday", "time":"8:30am-3:30pm"},
    ]

    const date = new Date();
    const today = date.getDay();

    return (
        <div>
            <h1 className='hoursTitle'>Hours</h1>
            <div className='column'>
                {
                    times.map((hours, index)=>{

                        const style = index == today ? "black !important" : "gray";
                        const size = index == today ? "large" : "medium";

                        return (
                            <div className='hourTable' key={index} style={{"color":style, "fontSize":size}}>
                                <div>
                                    <h2 className='tableH'>{hours.day}:</h2>
                                </div>
                                <h2 id={hours.day}>{hours.time}</h2>
                            </div>
                        )
                    })
                    }
            </div>
        </div>
    )
}

const Locations = () => {
    const [active, setActive] = useState("Baxter")

    const Map = (props) => {
        return (
            <div className='locations columns'>
                <h2 style={{"width":"100%", "textAlign":"center"}}>{props.location}</h2>
                <iframe src={props.src} style={{"border":"0"}} allowFullScreen={true} loading="eager" referrerPolicy="no-referrer-when-downgrade" className='iFrame'></iframe>
            </div>
        )
    }

    const Select = (props) => {

        const options = [
            "Baxter",
            "Sycamore"
        ]
    
        return (
            <select name="locations" id="locations" defaultValue={"Baxter"} value={props.current} onChange={(event)=>{props.active(event.target.value)}}>
                {options.map((item, index) => {
                    return <option key={"option " + index} value={item}>{item}</option>
                })}
            </select>
        )
    }

    return (
        <div className='locations'>
            <h1>Locations:</h1>
                <Select active={setActive} current={active}/>
            <div className='locationsContainer'>
                {
                active == "Baxter" ? 
                    <Map location={"Baxter"} src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2025.6555746211582!2d-83.39643490610436!3d33.94755835747831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66d13e86beafd%3A0x7ccc3f927b8b5a1e!2s1055%20Baxter%20St%20Apt%20207%2C%20Athens%2C%20GA%2030606!5e0!3m2!1sen!2sus!4v1690956578365!5m2!1sen!2sus"}/>
                :
                    <Map location={"Sycamore"} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1474.3301920801825!2d-83.41959945816608!3d33.947318833205486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66d025b536fa1%3A0xfcd56abfe06a3f37!2sTito%20professional%20barbershop%20%232!5e0!3m2!1sen!2sus!4v1690956616227!5m2!1sen!2sus"}/>
                }
            </div>
        </div>
    )
}

const Services = () => {

    const services = [
        {"service":"Classic Cut", "small":"Haircut & professional finish."},
        {"service":"Fades", "small":"Clean, Popular, Excellent Choice"},
        {"service":"Dry Shave", "small":"Razor Blade with Soap, Gel, etc."},
        {"service":"Wet Shave", "small":"Shaving Cream close shave"},
        {"service":"Classic Wax", "small":"Styling needs"},
        {"service":"Eyebrow Arch", "small":"Eyebrow touch up"},
        {"service":"And More!", "small":""},
    ]

    return (
        <div>
            <h1>Services</h1>
            <div>
                {services.map((service, index)=>{
                    return (
                        <div key={"service" + index}>
                            <h2 key={index}>{service.service}</h2>
                            <small>{service.small}</small>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const Tito = () => {
    const date = new Date();
    const currentDate = date.getFullYear();

    const icons = [
        {"social":"mingcute:phone-fill", "link":"tel:+17063513376"},
        {"social":"mi:email", "link":"mailto:titogerman35@yahoo.com"},
        {"social":"uiw:facebook", "link":"https://www.facebook.com/tito.suarez"},
        {"social":"uil:instagram-alt", "link":"https://www.instagram.com/titoakagerman_thebarber"},
        {"social":"cib:cashapp", "link":"https://cash.app/suarezgerm18"},
        {"social":"ion:logo-venmo", "link":"https://account.venmo.com/u/German_suarez_2"},
    ]

    const AnIcon = (props) => {
        return (
            <a href={props.link} target='_blank' key={props.index + "a"} > 
                <Icon icon={props.social} key={props.index} width={40}/>
            </a>
        );
    }

    return (
        <div className='tito'>
            <h1 style={{"width":"100%","textAlign":"center"}}>Meet Tito</h1>
            <div className='titoInfo'>
                <div className='image'>
                    <img src="/titoheadshot.jpg" alt="Picture of Tito" id='tito'/>
                </div>
                <div id='explain'>
                    <h1>Profesional Hairstylist</h1>
                    <h2>Cutting hair for {currentDate - 2006} years</h2>
                    <h2>Passionate</h2>
                    <h2>Expert Level Care</h2>
                    <h2>Men, Women, Children</h2>
                    <div className="iconSection" style={{"width":"100%"}}>
                        <div className='iconContainer'>
                            {icons.map((icon, index)=> {
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

export default Home;