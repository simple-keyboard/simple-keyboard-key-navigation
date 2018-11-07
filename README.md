<a href="https://codesandbox.io/s/x368y3120p" title="See demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/keyNav2.png" width="100%"></a>

> Select simple-keyboard keys without needing a mouse or touch screen.

[![Build Status](https://travis-ci.org/hodgef/simple-keyboard-key-navigation.svg?branch=master)](https://travis-ci.org/hodgef/simple-keyboard-key-navigation)
  
## Installation

### npm

`npm install simple-keyboard simple-keyboard-key-navigation --save`

### zip file (self-hosted)

[Click here to download the latest release (zip format).](https://github.com/hodgef/simple-keyboard-key-navigation/zipball/master)

> Want to use a CDN instead of self-host? Scroll down to the "Usage with CDN" instructions below.

## Usage with npm


````js
import Keyboard from "simple-keyboard";
import keyNavigation from "simple-keyboard-key-navigation";

import "simple-keyboard/build/css/index.css";
import "simple-keyboard-key-navigation/build/css/index.css";

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  enableKeyNavigation: true,
  modules: [
    keyNavigation
  ]
});

function onChange(input){
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button){
  console.log("Button pressed", button);
}

/**
 * To select the keys using the physical keyboard
 */
document.addEventListener(
  "keydown",
  e => {
    if (e.key === "ArrowUp") keyboard.modules.keyNavigation.up();
    else if (e.key === "ArrowDown") keyboard.modules.keyNavigation.down();
    else if (e.key === "ArrowLeft") keyboard.modules.keyNavigation.left();
    else if (e.key === "ArrowRight") keyboard.modules.keyNavigation.right();
    else if (e.key === "Enter") keyboard.modules.keyNavigation.press();
  },
  false
);
````

### html

````html
<input class="input" />
<div class="simple-keyboard"></div>
````

<a href="https://codesandbox.io/s/zx58y62xwm" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>

## Usage with CDN

### html

````html
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/css/index.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-keyboard-key-navigation@latest/build/css/index.css">
</head>

<body>
  <input class="input" />
  <div class="simple-keyboard"></div>

  <script src="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/index.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/simple-keyboard-key-navigation@latest/build/index.min.js"></script>
  <script src="src/index.js"></script>
</body>

</html>
````

### js (index.js)

````js
let Keyboard = window.SimpleKeyboard.default;
let keyNavigation = window.SimpleKeyboardKeyNavigation.default;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  enableKeyNavigation: true,
  modules: [
    keyNavigation
  ]
});

function onChange(input){
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button){
  console.log("Button pressed", button);
}

/**
 * To select the keys using the physical keyboard
 */
document.addEventListener(
  "keydown",
  e => {
    if (e.key === "ArrowUp") keyboard.modules.keyNavigation.up();
    else if (e.key === "ArrowDown") keyboard.modules.keyNavigation.down();
    else if (e.key === "ArrowLeft") keyboard.modules.keyNavigation.left();
    else if (e.key === "ArrowRight") keyboard.modules.keyNavigation.right();
    else if (e.key === "Enter") keyboard.modules.keyNavigation.press();
  },
  false
);
````

<a href="https://codesandbox.io/s/x368y3120p" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>

# Options and Customization

> To fully customize your virtual keyboard, check out the main simple-keyboard repository:

<a href="https://github.com/hodgef/simple-keyboard" title="simple-keyboard repository"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/simplekeyboard-banner3x.png" align="center"></a>
