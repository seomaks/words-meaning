import {ChangeEvent} from "react";

export const SearchBar = () => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    console.log('e')
  }

  const handleSubmit = () => {
    console.log('yo')
  }

  return <>
    <h1>Find out what this word means</h1>
    <form name="form" onSubmit={handleSubmit}>
      <label>
        <input type="text" value={''} onChange={handleChange}
               placeholder="Find here..."/>
      </label>
      <button type="submit"></button>
    </form>
  </>
}