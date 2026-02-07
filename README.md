# morse.js

A lightweight, dependency-free JavaScript utility for encoding and decoding
Morse code.

Designed to be dropped directly into static sites, interactive fiction,
ARG-style puzzles, and small web projects without a build step.

---

## Features

- Encode plain text into International Morse code
- Decode Morse code back into text
- Predictable spacing and normalization
- Graceful handling of unknown characters
- Works in browsers with no dependencies

---

## Installation

Copy `morse.js` into your project and include it with a script tag:

```html
<script src="/js/morse.js"></script>
```

The library exposes a single global object: `window.MORSE`.

---

## Usage

### Encode Text → Morse

```js
MORSE.encode("TRUST NO ONE");
// "- .-. ..- ... - / -. --- / --- -. ."
```

### Decode Morse → Text

```js
MORSE.decode("- .-. ..- ... - / -. ---");
// "TRUST NO"
```

Unknown characters are represented as `?`.

---

## API

### `MORSE.encode(text, options)`

Encodes a string into Morse code.

Options:
- `letterGap` (string): separator between letters (default: `" "`)
- `wordGap` (string): separator between words (default: `" / "`)

### `MORSE.decode(morse)`

Decodes a Morse string back into text.

### `MORSE.normalizeText(text)`

Normalizes input text (uppercase, trimmed spacing).

### `MORSE.normalizeMorse(morse)`

Normalizes Morse spacing and word separators.

---

## Design Notes

- Uses International Morse code
- Word boundaries are represented by `/`
- Intended to be readable, inspectable, and easy to modify
- No attempt is made to obscure logic or optimize aggressively

This is a utility, not a framework.

---

## License

MIT