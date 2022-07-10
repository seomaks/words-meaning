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
    case 'app/SET-ERROR':
    case 'app/SET-IS-LOADING':
    case 'app/SET-WORD':
      return {
        ...state, ...action.payload
      }
    default:
      return state
  }
}

// actions
export const setData = (isData: ResponseType) => ({
  type: 'app/SET-DATA',
  payload: {isData}
} as const)
export const setAppError = (error: ErrorType) => ({
  type: 'app/SET-ERROR',
  payload: {error}
} as const)
export const setIsLoading = (isLoading: boolean) => ({
  type: 'app/SET-IS-LOADING',
  payload: {isLoading},
} as const)
export const setWord = (word: string) => ({
  type: 'app/SET-WORD',
  payload: {word},
} as const)

// thunks
export const getMeaningTC = (word: string): AppThunkType => async dispatch => {
  dispatch(setIsLoading(true))
  try {
    const response = await dictionaryAPI.getRequest(word)
    dispatch(setData(response))
  } catch (e: any) {
    if (e.response.data) {
       dispatch(setAppError(e.response.data))
    } else dispatch(setAppError({
      title: 'Error',
      message: 'Sorry',
      resolution: 'Try later...'
    }))
  } finally {
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
type ErrorObjType = {
  message: string,
  resolution: string,
  title: string
}
export type ErrorType = ErrorObjType | null

