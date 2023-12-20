import Button from "components/button";
import { JokeContainer, JokeGeneratorWrapper, Paragraph } from "./styles";
import { useDispatch, useSelector } from 'react-redux'
import { jokeGeneratorSelector } from "store/redux/jokeGenerator/selectors"
import { getJoke } from "store/redux/jokeGenerator/jokeGeneratorSlice"

function JokeGenerator() {
  const dispatch = useDispatch()
  const {data, error, isLoading} = useSelector(jokeGeneratorSelector)

  console.log(data);
  console.log(error);
  console.log(isLoading);

  return (
    <JokeGeneratorWrapper>
      <JokeContainer>
        <Button
          name="Get Joke"
          onClick={() => {
            dispatch(getJoke() as any)
          }}
        />
        {isLoading && <Paragraph>Loading...</Paragraph>}
        {data && (
          <>
            <Paragraph>{data.setup}</Paragraph>
            <Paragraph>{data.punchline}</Paragraph>
          </>
        )}
        {error && <Paragraph>Error responce</Paragraph>}
      </JokeContainer>
    </JokeGeneratorWrapper>
  )
}

export default JokeGenerator;