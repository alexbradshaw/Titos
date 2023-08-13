import './Footer.css';

import AnIcon from '../Components/AnIcon/AnIcon';

const Footer = (props) => {
    return (
        <div className='footer'>
            <div className='socials foot'>
                <div className='socialsContainer'>
                    {props.socials.map((icon, index)=> {
                        return (
                            <AnIcon link={icon.link} social={icon.social} index={index + 'icon'} key={index + 'component'}/>
                        )
                        })}
                </div>
            </div>
            <div id='ab'>
                <h5>Designed and Maintained by <a href='https://www.linkedin.com/in/alexander-bradshaw' target='_blank'>Alex Bradshaw</a></h5>
            </div>
        </div>
    );

};

export default Footer;