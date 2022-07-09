import {AppThunkType} from "./store";
import {dictionaryAPI, ResponseType} from "../api/dictionary-api";

const initialState = {
  isLoading: false,
  error: null as ErrorType,
  word: '',
  isData: {
    word: '',
    phonetic: '',
    phonetics: [],
    origin: '',
    meanings: []
  } as ResponseType,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
  switch (action.type) {
    case 'app/SET-DATA':
      return {...state, isData: action.isData}
    case 'app/SET-ERROR':
      return {...state, error: action.error}
    case 'app/SET-IS-LOADING':
      return {...state, isLoading: action.isLoading}
    case 'app/SET-WORD':
      return {...state, word: action.word}
    default:
      return state
  }
}

// actions
export const setData = (isData: ResponseType) => ({
  type: 'app/SET-DATA',
  isData
} as const)
export const setAppError = (error: ErrorType) => ({
  type: 'app/SET-ERROR',
  error
} as const)
export const setIsLoading = (isLoading: boolean) => ({
  type: 'app/SET-IS-LOADING',
  isLoading,
} as const)
export const setWord = (word: string) => ({
  type: 'app/SET-WORD',
  word,
} as const)

// thunks
export const getMeaningTC = (word: string): AppThunkType => async dispatch => {
  dispatch(setIsLoading(true))
  try {
    const response = await dictionaryAPI.getRequest(word)
    dispatch(setData(response))
  } catch (e) {
    dispatch(setAppError('Error!'))
    console.log('error')
  }  finally {
    dispatch(setIsLoading(false))
  }
}

// types
export type SetDataActionType = ReturnType<typeof setData>
export type SetAppErrorActionType = ReturnType<typeof setAppError>
export type SetIsLoadingActionType = ReturnType<typeof setIsLoading>
export type SetWordActionType = ReturnType<typeof setWord>
export type AppActionsType = SetDataActionType
  | SetAppErrorActionType
  | SetIsLoadingActionType
  | SetWordActionType
export type ErrorType = string | null

