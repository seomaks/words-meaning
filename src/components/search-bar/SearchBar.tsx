import {ChangeEvent, FormEvent} from "react";
import {AppStateType} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {getMeaningTC, setWord} from "../../store/app-reducer";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const word = useSelector<AppStateType, string>(state => state.app.word)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    dispatch(setWord(e.currentTarget.value))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(getMeaningTC(word) as any)
    dispatch(setWord(''))
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