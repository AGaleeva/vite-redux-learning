export interface CatFactsState {
  data: CatFact[],
  error: any,
  isLoading: boolean
}

export interface CatFact {
  fact: string,    
  id: string
}

export interface CatFactsResponceData {
  fact: string,
  length: string
}