import Keyboard from 'simple-keyboard';
import SimpleKeyboardKeyNavigation from './KeyNavigation';


it('Keyboard renders without crashing', () => {
  const div = document.createElement('div');
  
  div.className += "simple-keyboard";
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
});