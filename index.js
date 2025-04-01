function addingEventListener() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const output = document.getElementById('output');

  button.addEventListener('click', function() {
    const inputValue = input.value;
    output.textContent = `You entered: ${inputValue}`;
  });
}
