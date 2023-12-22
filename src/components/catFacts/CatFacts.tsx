import Button from "components/button";
import { ButtonContainer, CatFactsWrapper, CatFactsContainer, FactsContainer, Paragraph } from "./styles";

import { AppDispatch } from "store/store"
import { useDispatch, useSelector } from "react-redux"
import { catFactsSelector } from 'store/redux/catFacts/selectors';
import { catFactsActions, getCatFact } from 'store/redux/catFacts/catFactsSlice'
import { v4 } from "uuid";
import { useEffect } from "react";
import { CatFact } from "store/redux/catFacts/types";

function CatFacts() {
  const dispatch: AppDispatch = useDispatch()
  const { data, error, isLoading } = useSelector(catFactsSelector)
  useEffect(() => {
    if(!!error) {
      alert('Net error!')
    }
  }, [error])

  return (
    <CatFactsWrapper>
      <CatFactsContainer>
        <ButtonContainer>
          <Button
            name="Get Cat Facts"
            type="submit"
            onClick={() => {
              dispatch(getCatFact())
            }}
            disabled = {isLoading}
          />
        </ButtonContainer>
        {isLoading && <Paragraph>Loading...</Paragraph>}
        {data.map(
          (catFact: CatFact) =>
            (
              <FactsContainer key={catFact.id}>
                <Paragraph>{catFact.fact}</Paragraph>
                <Button name="Delete fact" type="button" onClick={() => {
                  dispatch(catFactsActions.deleteCatFact(catFact.id))
                }} />
              </FactsContainer>
            ),
        )}
      <Button name="Delete all facts" type="button" onClick={() => {dispatch(catFactsActions.removeAllCatFacts)}} />
      </CatFactsContainer>
    </CatFactsWrapper>
  )
}

export default CatFacts;