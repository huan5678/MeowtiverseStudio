import {BiCollection, BiWallet, BiDollarCircle, BiLayer} from 'react-icons/bi';
import {GiSailboat} from 'react-icons/gi';
import {HiUserCircle} from 'react-icons/hi';
import {BsDiscord, BsFacebook, BsTwitter} from 'react-icons/bs';
import {ImBehance2} from 'react-icons/im';

function IconComponent(name: string)
{
  switch (name) {
    case 'BiCollection':
      return <BiCollection />;
    case 'BiWallet':
      return <BiWallet />;
    case 'BiDollarCircle':
      return <BiDollarCircle />;
    case 'BiLayer':
      return <BiLayer />;
    case 'GiSailboat':
      return <GiSailboat />;
    case 'HiUserCircle':
      return <HiUserCircle />;
    case 'BsDiscord':
      return <BsDiscord />;
    case 'BsFacebook':
      return <BsFacebook />;
    case 'BsTwitter':
      return <BsTwitter />;
    case 'ImBehance2':
      return <ImBehance2 />;
  }
  return ;
}

export default IconComponent;
