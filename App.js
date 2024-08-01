document.getElementById('generate').addEventListener('click', function() {
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const symbols = document.getElementById('symbols').checked;
    const numbers = document.getElementById('numbers').checked;
    const length = parseInt(document.getElementById('length').value);

    const selectedConditions = [uppercase, lowercase, symbols, numbers].filter(condition => condition);
    if (selectedConditions.length < 3) {
        alert('Debe elegir tres condiciones como mínimo');
        return;
    }

    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numberChars = '0123456789';
    let allChars = '';
    if (uppercase) allChars += upperChars;
    if (lowercase) allChars += lowerChars;
    if (symbols) allChars += symbolChars;
    if (numbers) allChars += numberChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('result').textContent = password;
});

document.getElementById('copy').addEventListener('click', function() {
    const password = document.getElementById('result').textContent;
    navigator.clipboard.writeText(password).then(function() {
        alert('Contraseña copiada al portapapeles');
    }, function() {
        alert('Error al copiar la contraseña');
    });
});