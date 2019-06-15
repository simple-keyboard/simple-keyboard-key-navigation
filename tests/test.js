import Keyboard from 'simple-keyboard';
import SimpleKeyboardKeyNavigation from '../src/index';

test('Runs without crashing', () => {
  const div = document.createElement('div');
  
  div.className = "simple-keyboard";
  document.body.appendChild(div);

  let keyboard = new Keyboard({
    debug: true,
    onChange: input => input,
    onKeyPress: button => button,
    enableKeyNavigation: true,
    modules: [
      SimpleKeyboardKeyNavigation
    ]
  });

  keyboard.modules.keyNavigation.right();
  keyboard.modules.keyNavigation.down();
  keyboard.modules.keyNavigation.press();

  expect(keyboard.getInput()).toBe("q");
});
