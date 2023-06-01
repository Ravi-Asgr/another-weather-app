import styles from "./header.module.css";
import PropTypes from 'prop-types';

export const Header = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

Header.propTypes = {
  children : PropTypes.node
}