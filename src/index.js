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

          if (keyboard.options.focusOnNavigation && buttonDOM.focus) {
            buttonDOM.focus();
          }

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
        if (document.querySelector(".hg-candidate-box")) {
          keyboard.candidateBox.destroy();
        }

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
        if (document.querySelector(".hg-candidate-box")) {
          keyboard.candidateBox.destroy();
        }

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
        if (document.querySelector(".hg-candidate-box")) {
          const nextElement = keyboard.candidateBox.candidateBoxElement.querySelector(
            ".hg-candidate-box-list .hg-keyMarker"
          ).nextElementSibling;

          if (nextElement) {
            keyboard.candidateBox.candidateBoxElement
              .querySelector(".hg-candidate-box-list .hg-keyMarker")
              .classList.remove("hg-keyMarker");

            nextElement.classList.add("hg-keyMarker");
          } else {
            const nextArrowElement = keyboard.candidateBox.candidateBoxElement.querySelector(
              ".hg-candidate-box-next.hg-candidate-box-btn-active"
            );

            if (nextArrowElement) {
              nextArrowElement.click();

              /**
               * Push close element
               */
              module.createCloseButton();

              /**
               * Select first button
               */
              keyboard.candidateBox.candidateBoxElement
                .querySelector("li")
                .classList.add("hg-keyMarker");
            }
          }
        } else {
          let rowPos = module.markerPosition.row;
          let btnPos = module.markerPosition.button + module.step;

          module.setMarker(rowPos, btnPos);
        }
      };

      module.left = () => {
        if (document.querySelector(".hg-candidate-box")) {
          const prevElement = keyboard.candidateBox.candidateBoxElement.querySelector(
            ".hg-candidate-box-list .hg-keyMarker"
          ).previousElementSibling;

          if (prevElement) {
            keyboard.candidateBox.candidateBoxElement
              .querySelector(".hg-candidate-box-list .hg-keyMarker")
              .classList.remove("hg-keyMarker");

            prevElement.classList.add("hg-keyMarker");
          } else {
            const prevArrowElement = keyboard.candidateBox.candidateBoxElement.querySelector(
              ".hg-candidate-box-prev.hg-candidate-box-btn-active"
            );

            if (prevArrowElement) {
              prevArrowElement.click();

              /**
               * Push close element
               */
              module.createCloseButton();

              /**
               * Select first button
               */
              keyboard.candidateBox.candidateBoxElement
                .querySelector("ul li:last-child")
                .classList.add("hg-keyMarker");
            }
          }
        } else {
          let rowPos = module.markerPosition.row;
          let btnPos = module.markerPosition.button - module.step;

          module.setMarker(rowPos, btnPos);
        }
      };

      module.press = () => {
        if (module.markedBtn) {
          if (
            !keyboard.candidateBox ||
            !document.querySelector(".hg-candidate-box")
          ) {
            /**
             * Press button
             */
            module.markedBtn.click();
          }

          /**
           * CandidateBox handling
           */
          if (document.querySelector(".hg-candidate-box")) {
            /**
             * If candidateBox has a closeButton
             */
            if (
              keyboard.candidateBox.candidateBoxElement.querySelector(
                ".hg-candidate-box-close"
              )
            ) {
              keyboard.candidateBox.candidateBoxElement
                .querySelector(".hg-candidate-box-list .hg-keyMarker")
                .click();
            } else {
              /**
               * Push close element
               */
              module.createCloseButton();

              /**
               * Select first button
               */
              keyboard.candidateBox.candidateBoxElement
                .querySelector("li")
                .classList.add("hg-keyMarker");
            }
          }
        }
      };

      module.createCloseButton = () => {
        const closeElem = document.createElement("li");
        closeElem.onclick = () => keyboard.candidateBox.destroy();
        closeElem.className = "hg-candidate-box-close";
        keyboard.candidateBox.candidateBoxElement
          .querySelector("ul")
          .prepend(closeElem);
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
