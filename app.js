var cuentas = [
    { nombre: "Maria", password: "123", saldo: 200 },
    { nombre: "Gerardo", password: "456", saldo: 290 },
    { nombre: "Mauricio", password: "789", saldo: 67 }
];

var selectedAccount = null;

function login() {
    const accountIndex = document.getElementById('account').value;
    const password = document.getElementById('password').value;

    if (cuentas[accountIndex] && password === cuentas[accountIndex].password) {
        selectedAccount = accountIndex;
        document.getElementById('options').style.display = 'block';
        document.getElementById('message').textContent = '';
        
        // Ocultar el campo de contraseña
        document.getElementById('password').style.display = 'none';
    } else {
        document.getElementById('message').textContent = 'Contraseña incorrecta. Inténtelo nuevamente.';
    }
}

function checkBalance() {
    const balance = cuentas[selectedAccount].saldo;
    document.getElementById('message').textContent = `Saldo actual: ${balance}`;
}

function deposit() {
    const amount = prompt("Ingrese el monto a ingresar:");
    const parsedAmount = parseInt(amount);

    if (!isNaN(parsedAmount) && parsedAmount > 0) {
        cuentas[selectedAccount].saldo += parsedAmount;
        document.getElementById('message').textContent = `Ingreso exitoso. Nuevo saldo: $${cuentas[selectedAccount].saldo}`;
    } else {
        document.getElementById('message').textContent = 'Ingrese un monto válido.';
    }
}

function withdraw() {
    const amount = prompt("Ingrese el monto a retirar:");
    const parsedAmount = parseInt(amount);

    if (!isNaN(parsedAmount) && parsedAmount > 0) {
        if (cuentas[selectedAccount].saldo - parsedAmount >= 10 && cuentas[selectedAccount].saldo - parsedAmount <= 990) {
            cuentas[selectedAccount].saldo -= parsedAmount;
            document.getElementById('message').textContent = `Retiro exitoso. Nuevo saldo: $${cuentas[selectedAccount].saldo}`;
        } else {
            document.getElementById('message').textContent = 'El monto a retirar no cumple con las reglas de negocio.';
        }
    } else {
        document.getElementById('message').textContent = 'Ingrese un monto válido.';
    }
}