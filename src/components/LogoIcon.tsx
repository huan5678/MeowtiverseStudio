import CatLogo from '../assets/images/cat_logo.svg';

interface Props {
  data: {
    logoWidth: string|number,
    logoHeight: string|number,
  };
}

const LogoIcon = ({ data }: Props) =>
{
  return (
    <>
      <img src={CatLogo} width={ data.logoWidth } height={ data.logoHeight }alt="Logo" />
    </>
  );
}

export default LogoIcon;
