import './AnIcon.css'
import { Icon } from '@iconify/react';

const AnIcon = (props) => {
    return (
        <a className='iconA' href={props.link} target='_blank' key={props.index + "a"} aria-label={props.alt}> 
            <Icon icon={props.social} key={props.index} width={40}/>
        </a>
    );
}

export default AnIcon;