let Keyboard = window.SimpleKeyboard.default;
let keyNavigation = window.SimpleKeyboardKeyNavigation.default;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  enableKeyNavigation: true,
  modules: [keyNavigation],
  useMouseEvents: true,
  onModulesLoaded: () => {
    console.log("Loaded!");
  }
});

let controller = new Keyboard(".simple-keyboard-controller", {
  onKeyPress: button => controllerOnKeyPress(button),
  theme: "simple-keyboard hg-theme-default hg-layout-default",
  layout: {
    default: ["{arrowup}", "{arrowleft} {arrowdown} {arrowright}", "{enter}"]
  },
  mergeDisplay: true,
  display: {
    "{enter}": "enter"
  }
});

console.log(keyboard);

document.querySelector(".input").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}

/**
 * Controller keyboard handler
 */
function controllerOnKeyPress(button) {
  if (button === "{arrowup}") keyboard.modules.keyNavigation.up();
  else if (button === "{arrowdown}") keyboard.modules.keyNavigation.down();
  else if (button === "{arrowleft}") keyboard.modules.keyNavigation.left();
  else if (button === "{arrowright}") keyboard.modules.keyNavigation.right();
  else if (button === "{enter}") keyboard.modules.keyNavigation.press();
}

/**
 * Physical keyboard handler
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
