import React from "react";
import { useState } from "react";
export default function Calculator() {
  const [result, setresult] = useState("");
  function clickhandle(e) {
    setresult(result.concat(e.target.name));
  }
  function calculate() {
    try {
      setresult(eval(result).toString());
    } catch {
      setresult("Error");
    }
  }
  function backspace() {
    setresult(result.slice(0, -1));
  }
  function clear() {
    setresult("");
  }

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button type="button" name="clear" className="highlight" id="clear" onClick={clear}>
            clear
          </button>
          <button type="button" name="c" className="highlight" onClick={backspace}>
            c
          </button>
          <button type="button" name="/" onClick={clickhandle}>
            /
          </button>
          <button type="button" name="7" onClick={clickhandle}>
            7
          </button>
          <button type="button" name="8" onClick={clickhandle}>
            8
          </button>
          <button type="button" name="9" onClick={clickhandle}>
            9
          </button>
          <button type="button" name="*" onClick={clickhandle}>
            *
          </button>
          <button type="button" name="4" onClick={clickhandle}>
            4
          </button>

          <button type="button" name="5" onClick={clickhandle}>
            5
          </button>
          <button type="button" name="6" onClick={clickhandle}>
            6
          </button>
          <button type="button" name="+" onClick={clickhandle}>
            +
          </button>

          <button type="button" name="1" onClick={clickhandle}>
            1
          </button>
          <button type="button" name="2" onClick={clickhandle}>
            2
          </button>

          <button type="button" name="3" onClick={clickhandle}>
            3
          </button>

          <button type="button" name="-" onClick={clickhandle}>
            -
          </button>
          <button type="button" name="0" onClick={clickhandle}>
            0
          </button>

          <button type="button" name="." onClick={clickhandle}>
            .
          </button>
          <button type="button" name="=" className="highlight" id="result" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
