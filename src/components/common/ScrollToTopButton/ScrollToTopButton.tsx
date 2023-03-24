import { useEffect, useState } from 'react';
import { ReactComponent as UpArrow } from '@src/assets/icons/upArrow.svg';
import cc from 'classcat';
import styles from './scroll-to-top-button.module.scss';

const debounce = (cb: () => void, delay = 100) => {
  let timer: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};
const SCROLL_MINIMUM_VALUE = 120;

export function ScrollToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = debounce(() => {
    window.scrollY > SCROLL_MINIMUM_VALUE ? setIsScrolled(true) : setIsScrolled(false);
  });

  const handleUpBtnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);

  return (
    <>
      {isScrolled && (
        <button className={cc([styles.wrapper])} onClick={handleUpBtnClick}>
          <span className={styles.text}>UP</span>
          <UpArrow />
        </button>
      )}
    </>
  );
}
