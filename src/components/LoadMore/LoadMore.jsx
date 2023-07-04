import PropTypes from 'prop-types';
import { Button } from './LoadMore.styled';

export const LoadMore = ({ handleBtnLoadMore, disabled }) => {
  return (
    <Button
      type="button"
      disabled={disabled}
      onClick={() => handleBtnLoadMore()}
    >
      {disabled ? 'Load More...' : 'Load More'}
    </Button>
  );
};

LoadMore.propTypes = {
  handleBtnLoadMore: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
