import {ChangeEvent, FormEvent} from "react";
import {AppStateType} from "../../store/store";
import {useSelector} from "react-redux";
import {
  getMeaningTC,
  setAppError,
  setWord
} from "../../store/app-reducer";
import {useAppDispatch} from "../../hooks";

export const SearchBar = () => {
  const dispatch = useAppDispatch()
  const word = useSelector<AppStateType, string>(state => state.app.word)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    dispatch(setWord(e.currentTarget.value))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(getMeaningTC(word))
    dispatch(setWord(''))
    dispatch(setAppError(null))
  }

  return <>
    <h1>Find out what this word means</h1>
    <form name="form" onSubmit={handleSubmit}>
      <label>
        <input type="text" value={word} onChange={handleChange}
               placeholder="Find here..."/>
      </label>
      <button type="submit"></button>
    </form>
  </>
}