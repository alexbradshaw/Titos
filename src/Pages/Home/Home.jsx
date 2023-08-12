import './Home.css';
import { useState } from 'react'
import AnIcon from '../../Components/AnIcon/AnIcon';

import '@fontsource/merriweather/';


const Home = () => {
    return (
        <div className='home'>
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
        {"day":"Monday", "time":"9:00am - 5:00pm"},
        {"day":"Tuesday", "time":"9:00am - 5:00pm"},
        {"day":"Wednesday", "time":"9:00am - 5:30pm"},
        {"day":"Thursday", "time":"9:00am - 5:00pm"},
        {"day":"Friday", "time":"9:00am - 5:00pm"},
        {"day":"Saturday", "time":"8:30am - 3:30pm"},
    ]

    const date = new Date();
    const today = date.getDay();

    return (
        <div>
            <h1>Hours</h1>
            <div className='column'>
                {
                    times.map((hours, index)=>{

                        const style = index == today ? "black !important" : "gray";
                        const size = index == today ? "large" : "medium";
                        // const hours = index == today ? "large" : "medium";

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
            <div style={{"marginTop":"5%"}}>
                <div className='map'>
                    <h2 style={{"marginRight":"15px"}}>{props.location}</h2>
                    <AnIcon link={props.directions} social={"ic:baseline-directions"} index={'directions'} key={'directions button'}/>
                </div>
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
                    <Map location={"Baxter"} src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2025.6555746211582!2d-83.39643490610436!3d33.94755835747831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66d13e86beafd%3A0x7ccc3f927b8b5a1e!2s1055%20Baxter%20St%20Apt%20207%2C%20Athens%2C%20GA%2030606!5e0!3m2!1sen!2sus!4v1690956578365!5m2!1sen!2sus"} directions={"https://maps.apple.com/?address=1057%20Baxter%20St,%20Athens,%20GA%20%2030606,%20United%20States&auid=1284389126743746913&ll=33.947138,-83.395774&lsp=9902&q=Tito%27s%20Professional%20Barbershop&t=m"}/>
                :
                    <Map location={"Sycamore"} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1474.3301920801825!2d-83.41959945816608!3d33.947318833205486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66d025b536fa1%3A0xfcd56abfe06a3f37!2sTito%20professional%20barbershop%20%232!5e0!3m2!1sen!2sus!4v1690956616227!5m2!1sen!2sus"} directions={"https://goo.gl/maps/uxYhJ6qEJaumk5gh7"}/>
                }
            </div>
        </div>
    )
}

const Services = () => {

    const services = [
        {"service":"Classic Cut", "small":"Haircut & professional finish.", "price":30},
        {"service":"Fades", "small":"Clean, Popular, Excellent Choice", "price":30},
        {"service":"Dry Shave", "small":"Razor Blade with Soap, Gel, etc.", "price":40},
        {"service":"Wet Shave", "small":"Shaving Cream close shave", "price":40},
        {"service":"Classic Wax", "small":"Styling needs", "price":10},
        {"service":"Eyebrow Arch", "small":"Eyebrow touch up", "price":10},
        {"service":"And More!", "small":""},
    ]

    return (
        <div>
            <h1>Services</h1>
            <div>
                {services.map((service, index)=>{
                    return (
                        <div className='service' key={"service" + index}>
                            <div className='serviceContainer'>
                                <div>
                                    <h2 key={index}>{service.service}</h2>
                                    <h2 className='servicePrice'>{service.price ? '$' : ''}{service.price}</h2>
                                </div>
                            </div>
                            <small>{service.small}</small>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;