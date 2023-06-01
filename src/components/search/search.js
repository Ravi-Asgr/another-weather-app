import styles from "./search.module.css";
import PropTypes from 'prop-types';

export const Search = ({
  placeHolder
}) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder={placeHolder}
      value={placeHolder} />
  );
};

Search.propTypes = {
  placeHolder : PropTypes.node
};