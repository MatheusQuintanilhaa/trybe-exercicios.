let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    let nameValue = document.getElementById('name').value;
    alert(`${(nameValue), 'Boa sorte!!'}`);
});