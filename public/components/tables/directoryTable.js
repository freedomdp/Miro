// Функция для отображения данных в таблице
function displayDirectory(data) {
    const tbody = document.querySelector('#directory-table tbody');
    tbody.innerHTML = ''; // Очистить текущее содержимое

    data.forEach((employee) => {
        const row = tbody.insertRow();
        row.insertCell().textContent = employee.name; // Имя сотрудника

        const actionsCell = row.insertCell();
        actionsCell.appendChild(createActionButton('edit', 'edit-btn', () => editEmployee(employee.id)));
        actionsCell.appendChild(createActionButton('delete', 'delete-btn', () => deleteEmployee(employee.id)));
    });
}

// Функция для создания кнопки действия
function createActionButton(icon, btnClass) {
    const button = document.createElement('button');
    button.className = `action-btn ${btnClass}`;
    const iconSpan = document.createElement('span');
    iconSpan.className = 'material-icons';
    iconSpan.innerText = icon;
    button.appendChild(iconSpan);
    return button;
}

// Функция для удаления сотрудника
function deleteEmployee(employeeId) {
    console.log('Deleting employee', employeeId);
    // Добавьте здесь логику для удаления сотрудника из Firebase
}

// Функция для редактирования сотрудника
function editEmployee(employeeId) {
    console.log('Editing employee', employeeId);
    // Добавьте здесь логику для редактирования сотрудника в Firebase
}

// Загрузка и отображение данных из Firebase
function fetchAndDisplayDirectory() {
    // Пример работы с Firebase Realtime Database
    const dbRef = firebase.database().ref('/directory');
    dbRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const employeesArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key]
        }));
        displayDirectory(employeesArray);
    });
}

// Слушатель события загрузки DOM для начала загрузки данных
document.addEventListener('DOMContentLoaded', fetchAndDisplayDirectory);
