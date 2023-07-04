import ScrollToTop from 'react-scroll-up';
import { TbArrowBigUpLineFilled} from 'react-icons/tb';

export const ScrollToTopArrw = () => {
  return (
    <ScrollToTop
      showUnder={120}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 35,
        background:
          'linear-gradient(114.99deg, rgb(71, 28, 169) -0.99%, rgb(87, 54, 163) 54.28%, rgb(75, 42, 153) 78.99%)',
        width: '52px',
        height: '52px',
        padding: '8px',
        borderRadius: '30%',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
      }}
    >
      <TbArrowBigUpLineFilled size="32" strokeWidth="0.2px" />
    </ScrollToTop>
  );
};
