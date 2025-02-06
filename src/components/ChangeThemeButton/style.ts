import Stormtroopers from '../../assets/icons/storm-trooper.svg';
import DarthVader from '../../assets/icons/darth-vader.svg';

const styledChangeThemeButton = {
  position: 'relative',
  display: 'inline-block',
  width: '60px',
  height: '34px',
  '& input': {
    opacity: 0,
    width: 0,
    height: 0,
  },
};

const styledSlider = (checked: boolean) => ({
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#ccc',
  transition: '0.4s',
  borderRadius: '34px',
  '&:before': {
    position: 'absolute',
    content: '""',
    height: '40px',
    width: '40px',
    left: '0px',
    bottom: '4px',
    top: 0,
    margin: 'auto 0',
    transition: '0.4s',
    boxShadow: '0 0px 15px #2020203d',
    background: `white url(${Stormtroopers}) no-repeat center`,
    backgroundSize: 'contain',
    borderRadius: '50%',
    ...(checked && {
      transform: 'translateX(24px)',
      background: `url(${DarthVader}) no-repeat center`,
      backgroundSize: 'contain',
    }),
  },
});

export { styledChangeThemeButton, styledSlider };
