document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.display');
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('clear')) {
        display.value = '';
      } else if (button.classList.contains('equal')) {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = 'Error';
        }
      } else {
        display.value += button.textContent;
      }
    });
  });
});
