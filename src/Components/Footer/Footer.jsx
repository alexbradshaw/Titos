import './Footer.css';
import { Icon } from '@iconify/react';

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

const Footer = () => {

    return (
        <div className='footer'>
            <div className='socials foot'>
                <div className='socialsContainer'>
                    {icons.map((icon, index)=> {
                        return (
                            <AnIcon link={icon.link} social={icon.social} index={index + 'icon'} key={index + 'component'}/>
                        )
                        })}
                </div>
            </div>
            <div id='ab'>
                <h5>Designed and Maintained by Alex Bradshaw</h5>
            </div>
        </div>
    );

};

export default Footer;