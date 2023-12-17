import { ButtonContainer, Count, FeedbackWrapper, ImgContainer } from "./styles"
import {LikeLogo, DislikeLogo} from 'assets'
import Button from "components/button"

import { useDispatch, useSelector } from "react-redux"
import { actions } from "store/redux/feedback/feedbackSlice"
import { feedbackState } from "store/redux/feedback/selectors"

function Feedback() {
  const dispatch = useDispatch();
  const feedback = useSelector(feedbackState);

  const plusLikes = () => {
    dispatch(actions.plusLikes())
  }

  const plusDislikes = () => {
    dispatch(actions.plusDislikes())
  }

  const resetRes = () => {
    dispatch(actions.resetResults())
  }

  return (
    <FeedbackWrapper>
      <ImgContainer>
        <img src={LikeLogo} alt="Like logo" onClick={plusLikes} />
      </ImgContainer>
      <Count>{feedback.likes}</Count>
      <ButtonContainer>
        <Button name="Reset results" type="button" onClick={resetRes} />
      </ButtonContainer>
      <ImgContainer>
        <img src={DislikeLogo} alt="Dislike logo" onClick={plusDislikes} />
      </ImgContainer>
      <Count>{feedback.dislikes}</Count>
    </FeedbackWrapper>
  )
}

export default Feedback