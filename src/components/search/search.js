import styles from "./search.module.css";
import PropTypes from 'prop-types';

export const Search = ({
  placeHolder,
  onFocus,
  onChange,
  onKeyDown,
  city
}) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder={placeHolder}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={city} />
  );
};

Search.propTypes = {
  placeHolder : PropTypes.node,
  onFocus : PropTypes.func,
  onChange : PropTypes.func,
  onKeyDown : PropTypes.func,
  city : PropTypes.string
};