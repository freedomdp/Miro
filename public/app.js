// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDb5kT8VD7Mtqbhk6NxBHPZKyZ_cRuyxQo",
    authDomain: "miro-3ee4a.firebaseapp.com",
    databaseURL: "https://miro-3ee4a-default-rtdb.firebaseio.com",
    projectId: "miro-3ee4a",
    storageBucket: "miro-3ee4a.appspot.com",
    messagingSenderId: "12831302195",
    appId: "1:12831302195:web:43a051aa8b37c77e843946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Fetch and display Directory data
function fetchAndDisplayDirectory() {
    const dbRef = ref(database, 'Directory');
    get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            displayDirectory(data);
        } else {
            console.log('No data available');
        }
    }).catch((error) => {
        console.error('Failed to read data:', error);
    });
}

function displayDirectory(data) {
    const tbody = document.querySelector('#directory-table tbody');
    tbody.innerHTML = ''; // Clear current content

    Object.keys(data).forEach(key => {
      const row = tbody.insertRow();
      row.insertCell().textContent = data[key]; // Employee Name

      const actionsCell = row.insertCell();
      actionsCell.appendChild(createActionButton('edit', 'edit-btn', () => editEmployee(key)));
      actionsCell.appendChild(createActionButton('delete', 'delete-btn', () => deleteEmployee(key)));
  });
}

function createActionButton(iconName, btnClass, onClick) {
    const button = document.createElement('button');
    button.className = `material-icons action-btn ${btnClass}`;
    button.innerHTML = iconName;
    button.onclick = onClick;
    return button;
}

function deleteEmployee(key) {
    console.log('Deleting employee', key);
    // Implement deletion logic
}

function editEmployee(key) {
    console.log('Editing employee', key);
    // Implement edit logic
}

// Initial fetch and display
fetchAndDisplayDirectory();

/* ---------------------- ADD employee ---------------- */
// Открытие модального окна
document.getElementById('add-employee-btn').addEventListener('click', function() {
  document.getElementById('modal-add-employee').style.display = 'block';
});

// Закрытие модального окна
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modal-add-employee').style.display = 'none';
});

// Добавление нового сотрудника
document.getElementById('add-employee-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const employeeName = document.getElementById('employee-name').value;
  // Здесь добавьте логику добавления сотрудника в Firebase
  addNewEmployee(employeeName);
});

// Функция для добавления нового сотрудника в базу данных
function addNewEmployee(name) {
  // Пример добавления сотрудника, реализуйте согласно вашей логике в Firebase
  const dbRef = firebase.database().ref('Directory').push();
  dbRef.set({
      name: name
  }).then(() => {
      document.getElementById('modal-add-employee').style.display = 'none'; // Закрываем модальное окно после сохранения
      // Опционально: обновление списка сотрудников на странице
  });
}
