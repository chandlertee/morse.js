/*
 * morse.js
 * Lightweight Morse code encode/decode utility.
 * No dependencies. No build step.
 *
 * Designed for static sites, interactive fiction,
 * and signal-based puzzles.
 */

(function () {
  const TABLE = {
    A: ".-",    B: "-...",  C: "-.-.",  D: "-..",
    E: ".",     F: "..-.",  G: "--.",   H: "....",
    I: "..",    J: ".---",  K: "-.-",   L: ".-..",
    M: "--",    N: "-.",    O: "---",   P: ".--.",
    Q: "--.-",  R: ".-.",   S: "...",   T: "-",
    U: "..-",   V: "...-",  W: ".--",   X: "-..-",
    Y: "-.--",  Z: "--..",

    "0": "-----", "1": ".----", "2": "..---",
    "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..",
    "9": "----.",

    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    " ": "/"      // word separator
  };

  const REVERSE_TABLE = Object.entries(TABLE).reduce((acc, [k, v]) => {
    acc[v] = k;
    return acc;
  }, {});

  function normalizeText(text) {
    return String(text)
      .toUpperCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function normalizeMorse(morse) {
    return String(morse)
      .replace(/\s+/g, " ")
      .replace(/\s*\/\s*/g, " / ")
      .trim();
  }

  function encode(text, options = {}) {
    const opts = {
      letterGap: " ",
      wordGap: " / ",
      ...options
    };

    const normalized = normalizeText(text);

    return normalized
      .split("")
      .map(char => TABLE[char] || "?")
      .join(opts.letterGap)
      .replace(/\s\/\s/g, opts.wordGap);
  }

  function decode(morse, options = {}) {
    const normalized = normalizeMorse(morse);

    return normalized
      .split(" ")
      .map(token => {
        if (token === "/") return " ";
        return REVERSE_TABLE[token] || "?";
      })
      .join("")
      .replace(/\s+/g, " ")
      .trim();
  }

  window.MORSE = {
    TABLE,
    encode,
    decode,
    normalizeText,
    normalizeMorse,
    version: "0.1"
  };
})();
