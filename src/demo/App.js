import Keyboard from 'simple-keyboard';
import keyNavigation from '../lib/components/KeyNavigation';

import 'simple-keyboard/build/css/index.css';
import  '../lib/components/css/KeyNavigation.css';
import './css/App.css';

class App {
  constructor(){
    document.addEventListener('DOMContentLoaded', this.onDOMLoaded);
    this.layoutName = "default";

    console.log("Loading");
  }

  onDOMLoaded = async () => {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      enableKeyNavigation: true,
      modules: [
        keyNavigation
      ],
      onModulesLoaded: () => {
        console.log("Loaded!");
      }
    });

    this.controllerKeyboard = new Keyboard(".simple-keyboard-controller", {
      onKeyPress: button => this.controllerOnKeyPress(button),
      theme: "simple-keyboard hg-theme-default hg-layout-default",
      layout: {
        default: [
          "{arrowup}",
          "{arrowleft} {arrowdown} {arrowright}",
          "{enter}"
        ]
      },
      mergeDisplay: true,
      display: {
        "{enter}": "enter"
      }
    });

    /**
     * Adding preview (demo only)
     */
    document.querySelector('.keyboardContainer').insertAdjacentHTML('beforebegin', `
    <div class="simple-keyboard-preview">
      <textarea class="input"></textarea>
    </div>
    `);

    document.querySelector(".input").addEventListener("input", event => {
      this.keyboard.setInput(event.target.value);
    });

    document.addEventListener("keydown", (e) => {
      if(e.key === "ArrowUp")
        this.keyboard.modules.keyNavigation.up();

      else if(e.key === "ArrowDown")
        this.keyboard.modules.keyNavigation.down();

      else if(e.key === "ArrowLeft")
        this.keyboard.modules.keyNavigation.left();

      else if(e.key === "ArrowRight")
        this.keyboard.modules.keyNavigation.right();

      else if(e.key === "Enter")
        this.keyboard.modules.keyNavigation.press();
    }, false);
  
    console.log(this.keyboard);
  }

  controllerOnKeyPress = (button) => {
    if(button === "{arrowup}")
      this.keyboard.modules.keyNavigation.up();

    else if(button === "{arrowdown}")
      this.keyboard.modules.keyNavigation.down();

    else if(button === "{arrowleft}")
      this.keyboard.modules.keyNavigation.left();

    else if(button === "{arrowright}")
      this.keyboard.modules.keyNavigation.right();

    else if(button === "{enter}")
      this.keyboard.modules.keyNavigation.press();
  }

  handleShiftButton = () => {
    let layoutName = this.layoutName;
    let shiftToggle = this.layoutName = layoutName === "default" ? "shift" : "default";
  
    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }

  onChange = input => {
    document.querySelector('.input').value = input;
  }

  onKeyPress = button => {
    console.log("Button pressed", button);
  
      /**
       * Shift functionality
       */
      if(button === "{lock}" || button === "{shift}")
        this.handleShiftButton();
  }

}

export default App;