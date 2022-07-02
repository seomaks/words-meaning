import style from './DataDisplay.module.css'

export const DataDisplay = () => {
return <>
<div className={style.container}>
<h2>What does the word «» mean</h2>
  <p><span>Word: </span>[word] </p>

  <p><span>Part of speech: </span>noun</p>
  <p><span>Definition: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aliquid aspernatur consequatur doloribus, et, excepturi exercitationem facere illo ipsam itaque i</p>
  <p><span>Example: </span>lorem ipsum fsfsfmoisfo</p>
  <p><span>Synonyms: </span>lorem, ipsum </p>
  <p><span>Antonyms: </span>lorem, ipsum </p>
</div>
</>
}