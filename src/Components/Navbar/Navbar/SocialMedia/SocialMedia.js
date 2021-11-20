
import { Icon } from '../Menu/MenuItems';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SocialMediaLi, SocialMediaUl } from '../../../Style/Style';

export default function SocialMedia() {
    return (
        <SocialMediaUl>
            {
                Icon.map((item, index) => {
                
                    return (
                        <SocialMediaLi key={index}>
                            <Link to={item.path} className='text-xl '>
                                { item.icon === 'facebook' && <FaFacebook className="icon " /> }
                                {   item.icon === 'instagram' && <FaInstagram className="icon " /> }
                                {  item.icon === 'twitter' && <FaTwitter className="icon " /> }
                                { item.icon === 'linkedin' && <FaLinkedin className="icon " /> }
                            </Link>
                        </SocialMediaLi>
                    );
                    
                })
            }
        </SocialMediaUl>
    )
}
