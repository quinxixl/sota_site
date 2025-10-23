import React from 'react';
import bee from '../../icons/bee.svg';

function Footer() {
    return(
        <footer className='footer'>
            <img src={bee} alt="" className='footer__bee'/>
            <p className='footer__year'>&copy;2025</p>
            <div className='footer__socials'>
                <a href='' className='inst'>instagram</a>
                <a href='' className='youtube'>youtube</a>
                <a href='' className='vk'>vkontakte</a>
                <a href='' className='behance'>behance</a>
                <a href='' className='telegram'>telegram</a>
                <a href='' className='pinterest'>pinterest</a>
            </div>
        </footer>

    )
}

export default Footer;