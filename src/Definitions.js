import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
export default function Definitions(response) {
  if (response.definitions) {
    return (
      <div>
        <h2>{response.definitions.word}</h2>
        {response.definitions.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {response.definitions.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
              <br />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
