import {BiCollection, BiWallet, BiDollarCircle, BiLayer} from 'react-icons/bi';
import {GiSailboat} from 'react-icons/gi';
import {HiUserCircle} from 'react-icons/hi';
import {BsDiscord, BsFacebook, BsTwitter} from 'react-icons/bs';
import {ImBehance2} from 'react-icons/im';

function IconComponent(name: string)
{
  switch (name) {
    case 'STEP 1':
      return <BiCollection />;
    case 'STEP 2':
    case 'Wallet':
      return <BiWallet />;
    case 'STEP 3':
      return <BiDollarCircle />;
    case 'STEP 4':
      return <GiSailboat />;
    case 'Collections':
      return <BiLayer />;
    case 'User':
      return <HiUserCircle />;
    case 'Discord':
      return <BsDiscord />;
    case 'Facebook':
      return <BsFacebook />;
    case 'Twitter':
      return <BsTwitter />;
    case 'Behance':
      return <ImBehance2 />;
  }
  return ;
}

export default IconComponent;
