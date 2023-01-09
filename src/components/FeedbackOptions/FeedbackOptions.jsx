import PropTypes from 'prop-types';
import { ButtonList, ButtonListItem, ButtonListBtn } from './FeedbackOptions.syled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonListItem key={option}>
          <ButtonListBtn
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </ButtonListBtn>
        </ButtonListItem>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

