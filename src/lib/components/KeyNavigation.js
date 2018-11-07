import './css/KeyNavigation.css';

class SimpleKeyboardKeyNavigation {
  init = (keyboard) => {
    keyboard.registerModule(
      "keyNavigation",
      (module) => {
        module.initVars = (layoutName) => {
          module.markerPosition = {
            row: 0,
            button: 0
          };
          module.layoutName = layoutName || "";
          module.step = keyboard.options.keyNavigationStep || 1;
        }

        module.initMarker = () => {
          module.setMarker(0,0);
        }

        module.getButtonAt = (rowPos, btnPos) => {
          let layoutName = module.layoutName;
          return keyboard.keyboardDOM.querySelector(`.hg-button[data-skbtnuid="${layoutName}-r${rowPos}b${btnPos}"]`);
        }

        module.setMarker = (rowPos, btnPos) => {
          let buttonDOM = module.getButtonAt(rowPos, btnPos);

          if(buttonDOM){
            if(module.markedBtn){
              module.markedBtn.classList.remove('hg-keyMarker');
            }

            buttonDOM.classList.add("hg-keyMarker");

            module.markedBtn = buttonDOM;

            module.markerPosition = {
              row: rowPos,
              button: btnPos
            };
          } else {
            if(keyboard.options.debug)
              console.log(`SimpleKeyboardKeyNavigation: Button default-r${rowPos}b${btnPos} doesnt exist!`);
          }
        }

        module.up = () => {
          let rowPos = module.markerPosition.row - module.step;
          let btnPos = module.markerPosition.button;

          if(!module.getButtonAt(rowPos, btnPos)){
            for(let i = btnPos; i >= 0; i--){
              let checkBtn = module.getButtonAt(rowPos, i);

              if(checkBtn){
                btnPos = i;
                break;
              }
            }
          }

          module.setMarker(rowPos, btnPos);
        }

        module.down = () => {
          let rowPos = module.markerPosition.row + module.step;
          let btnPos = module.markerPosition.button;

          if(!module.getButtonAt(rowPos, btnPos)){
            for(let i = btnPos; i >= 0; i--){
              let checkBtn = module.getButtonAt(rowPos, i);

              if(checkBtn){
                btnPos = i;
                break;
              }
            }
          }

          module.setMarker(rowPos, btnPos);
        }

        module.right = () => {
          let rowPos = module.markerPosition.row;
          let btnPos = module.markerPosition.button + module.step;

          module.setMarker(rowPos, btnPos);
        }

        module.left = () => {
          let rowPos = module.markerPosition.row;
          let btnPos = module.markerPosition.button - module.step;

          module.setMarker(rowPos, btnPos);
        }

        module.press = () => {
          if(module.markedBtn && module.markedBtn.onclick){
            module.markedBtn.onclick();
          }
        }

        module.fn = {};
        module.fn.onRender = keyboard.onRender;

        keyboard.onRender = () => {
          if(keyboard.options.layoutName !== module.layoutName && keyboard.options.enableKeyNavigation){
            if(keyboard.options.debug)
              console.log(`SimpleKeyboardKeyNavigation: Refreshed`);

            module.initVars(keyboard.options.layoutName);
            module.initMarker();
          }

          module.fn.onRender();
        }
      }
    );
  }
}

export default SimpleKeyboardKeyNavigation;