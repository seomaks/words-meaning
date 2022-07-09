import axios from "axios";

const instance = axios.create();
export const dictionaryAPI = {
  getRequest(word: string) {
    return instance.get<Array<ResponseType>>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(result => {
        return result.data[0]
      })
  }
}

//types
type PhoneticsType = {
  text: string,
  audio: string
}

type DefinitionsType = {
  definition: string,
  example: string,
  synonyms: Array<string>,
  antonyms: Array<string>
}

type MeaningsType = {
  partOfSpeech: string,
  definitions: Array<DefinitionsType>
}

export type ResponseType = {
  word: string,
  phonetic: string,
  phonetics: Array<PhoneticsType>,
  origin: string,
  meanings: Array<MeaningsType>
}

