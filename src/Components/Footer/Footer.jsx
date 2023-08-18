import './Footer.css';

import AnIcon from '../AnIcon/AnIcon';

const Footer = (props) => {
    return (
        <footer className='footer' aria-label='footer'>
            <div className='socials foot'>
                <div className='socialsContainer'>
                    {props.socials.map((icon, index)=> {
                        return (
                            <AnIcon link={icon.link} social={icon.social} index={index + 'icon'} key={index + 'component'} alt={icon.alt}/>
                        )
                        })}
                </div>
            </div>
            <div id='ab'>
                <h5>Designed and Maintained by <a href='https://www.linkedin.com/in/alexander-bradshaw' target='_blank'>Alex Bradshaw</a></h5>
            </div>
        </footer>
    );

};

export default Footer;