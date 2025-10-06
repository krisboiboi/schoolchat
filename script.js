const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

// Add event listener for the form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        const item = document.createElement('li');
        item.textContent = input.value;
        messages.appendChild(item);
        input.value = '';
    }
});
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});
