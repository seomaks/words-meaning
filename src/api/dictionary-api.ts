import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
});
export const dictionaryAPI = {
  getRequest(word: string) {
    return instance.get<ResponseType>(`${word}`)
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

