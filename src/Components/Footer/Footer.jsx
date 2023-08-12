import './Footer.css';
import { Icon } from '@iconify/react';

const AnIcon = (props) => {
    return (
        <a href={props.link} target='_blank' key={props.index + "a"} > 
            <Icon icon={props.social} key={props.index} width={40}/>
        </a>
    );
}

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