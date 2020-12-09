import "./index.css";

class SimpleKeyboardKeyNavigation {
  init = keyboard => {
    keyboard.registerModule("keyNavigation", module => {
      module.initMarkerPos = [0, 0];
      module.lastMarkerPos = module.initMarkerPos;

      module.initVars = layoutName => {
        module.markerPosition = {
          row: 0,
          button: 0
        };
        module.layoutName = layoutName || "";
        module.step = keyboard.options.keyNavigationStep || 1;
      };

      module.initMarker = () => {
        const initMarkerPos = module.getButtonAt(...module.lastMarkerPos)
          ? module.lastMarkerPos
          : module.initMarkerPos;

        module.setMarker(...initMarkerPos);
      };

      module.getButtonAt = (rowPos, btnPos) => {
        let layoutName = module.layoutName;
        return keyboard.keyboardDOM.querySelector(
          `.hg-button[data-skbtnuid="${layoutName}-r${rowPos}b${btnPos}"]`
        );
      };

      module.setMarker = (rowPos, btnPos) => {
        let buttonDOM = module.getButtonAt(rowPos, btnPos);

        if (buttonDOM) {
          if (module.markedBtn) {
            module.markedBtn.classList.remove("hg-keyMarker");

            if (keyboard.options.markerColor) {
              module.markedBtn.style = "";
            }
          }

          buttonDOM.classList.add("hg-keyMarker");

          if (keyboard.options.markerColor) {
            buttonDOM.style = `box-shadow: 0 0 0 2px ${keyboard.options.markerColor}`;
          }

          module.markedBtn = buttonDOM;

          module.lastMarkerPos = [rowPos, btnPos];
          module.markerPosition = {
            row: rowPos,
            button: btnPos
          };

          return true;
        } else {
          if (keyboard.options.debug)
            console.log(
              `SimpleKeyboardKeyNavigation: Button default-r${rowPos}b${btnPos} doesnt exist!`
            );

          return false;
        }
      };

      module.up = () => {
        let rowPos = module.markerPosition.row - module.step;
        let btnPos = module.markerPosition.button;

        if (!module.getButtonAt(rowPos, btnPos)) {
          for (let i = btnPos; i >= 0; i--) {
            let checkBtn = module.getButtonAt(rowPos, i);

            if (checkBtn) {
              btnPos = i;
              break;
            }
          }
        }

        module.setMarker(rowPos, btnPos);
      };

      module.down = () => {
        let rowPos = module.markerPosition.row + module.step;
        let btnPos = module.markerPosition.button;

        if (!module.getButtonAt(rowPos, btnPos)) {
          for (let i = btnPos; i >= 0; i--) {
            let checkBtn = module.getButtonAt(rowPos, i);

            if (checkBtn) {
              btnPos = i;
              break;
            }
          }
        }

        module.setMarker(rowPos, btnPos);
      };

      module.right = () => {
        let rowPos = module.markerPosition.row;
        let btnPos = module.markerPosition.button + module.step;

        module.setMarker(rowPos, btnPos);
      };

      module.left = () => {
        let rowPos = module.markerPosition.row;
        let btnPos = module.markerPosition.button - module.step;

        module.setMarker(rowPos, btnPos);
      };

      module.press = () => {
        if (module.markedBtn) {
          if (module.markedBtn.onpointerdown) {
            module.markedBtn.onpointerdown();
            module.markedBtn.onpointerup();
          } else if (module.markedBtn.onclick) {
            module.markedBtn.onclick();
          } else if (module.markedBtn.ontouchdown) {
            module.markedBtn.ontouchdown();
            module.markedBtn.ontouchup();
          }
        }
      };

      module.init = () => {
        module.initVars(keyboard.options.layoutName);
        module.initMarker();
      };

      module.fn = {};
      module.fn.onRender = keyboard.onRender;
      module.fn.onInit = keyboard.onInit;

      keyboard.onRender = () => {
        if (
          (keyboard.options.layoutName !== module.layoutName ||
            keyboard.options.enableKeyNavigation !==
              module.enableKeyNavigation) &&
          keyboard.options.enableKeyNavigation
        ) {
          if (keyboard.options.debug)
            console.log(`SimpleKeyboardKeyNavigation: Refreshed`);

          module.init();
        }

        module.fn.onRender();
      };

      keyboard.onInit = () => {
        if (keyboard.options.enableKeyNavigation) {
          module.init();
        }

        module.fn.onInit();
      };
    });
  };
}

export default SimpleKeyboardKeyNavigation;
