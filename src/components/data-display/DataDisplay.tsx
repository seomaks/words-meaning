import style from './DataDisplay.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {ResponseType} from "../../api/dictionary-api";
import Preloader from "../common/Preloader";
import {ErrorType} from "../../store/app-reducer";

export const DataDisplay = () => {
  const data = useSelector<AppStateType, ResponseType>(state => state.app.isData)
  const isLoading = useSelector<AppStateType, boolean>(state => state.app.isLoading)
  const isError = useSelector<AppStateType, ErrorType>(state => state.app.error)

  function playAudio() {
    data.phonetics.find(p => {
     return p.audio  ?
        new Audio(p.audio).play() : ''
    })
  }

  if (isLoading) {
    return <div className="preload">
      <Preloader/>
    </div>
  }

  if (isError) {
    return <div>
      <h2>{isError.title}</h2>
      <p>{isError.message}</p>
      <p>{isError.resolution}</p>
    </div>
  }

  return (
    <div className={style.container}>
      {data.word && <div className={style.header}><h2>«{data.word}»</h2>
        <p><span>Word: </span>{data.word} &nbsp;
        <i onClick={() => {
        playAudio();
      }} className="fa fa-microphone" aria-hidden="true"/>
        </p>
      {data.phonetic && <p><span>Phonetic: </span>{data.phonetic}</p>}
      </div>}
      {data.meanings.map((m, index) => {
        return <div className={style.mainBlock} key={index}>
          <p><span>Part of speech: </span>{m.partOfSpeech}</p>
          {m.definitions.map((d, index) => {
            return <div key={index}>
              {d.definition && <p><span>Definition: </span>{d.definition}</p>}
              {d.example && <p><span>Example: </span>{d.example}</p>}
              {d.synonyms.length !== 0 && <p><span>Synonyms: </span>{d.synonyms.toString()}</p>}
              {d.antonyms.length !== 0 && <p><span>Antonyms: </span>{d.antonyms.toString()}</p>}
            </div>
          })}
        </div>
      })}
    </div>
  )
}