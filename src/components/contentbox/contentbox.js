import styles from "./contentbox.module.css";
import PropTypes from 'prop-types';

export const ContentBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

ContentBox.propTypes = {
  children : PropTypes.node
};