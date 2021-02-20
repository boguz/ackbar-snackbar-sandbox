document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('#createButton');

  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });
});

function handleButtonClick(event) {
  event.preventDefault();
  const ackbarSnackbarElement = document.querySelector('ackbar-snackbar');
  const snackbarMessage = document.querySelector('#message').value;
  const snackbarButtonText = document.querySelector('#buttonText').value;
  const snackbarDuration = document.querySelector('#duration').value;
  const snackbarType = document.querySelector('input[name="auto"]:checked').value;
  const snackbarSize = document.querySelector('input[name="size"]:checked').value;
  const snackbarPosition = document.querySelector('#position').value;
  const snackbarVariant = document.querySelector('#variant').value;
  const snackbarAnimationName = document.querySelector('#animationName').value;
  const snackbarAnimationDuration = document.querySelector('#animationDuration').value;

  ackbarSnackbarElement.setAttribute('position', snackbarPosition)

  const snackbarOptions = {}

  if (snackbarMessage) snackbarOptions.message = snackbarMessage;
  if (snackbarAnimationDuration) snackbarOptions.animationDuration = +snackbarAnimationDuration;
  if (snackbarAnimationName) snackbarOptions.animationName = snackbarAnimationName;
  if (snackbarDuration) snackbarOptions.duration = +snackbarDuration;
  if (snackbarButtonText) snackbarOptions.buttonText = snackbarButtonText;
  if (snackbarSize) snackbarOptions.size = snackbarSize;
  if (snackbarType) snackbarOptions.type = snackbarType;
  if (snackbarVariant) snackbarOptions.variant = snackbarVariant;

  window.dispatchEvent(new CustomEvent('ackbar-snackbar-add', {
    bubbles: true,
    composed: true,
    detail: snackbarOptions
  }));
}
