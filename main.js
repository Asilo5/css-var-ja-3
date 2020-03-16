const inputs = document.querySelectorAll('.controls inputs');

function handleUpdate() {
    console.log('hello');
    console.log(this.value)
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));