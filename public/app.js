// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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


// Дополнительные импорты для работы с Realtime Database
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Инициализируем базу данных
const database = getDatabase(app);

// Функция для чтения данных из таблицы Directory и отображения в таблице
function fetchAndDisplayDirectory() {
  const dbRef = ref(database, 'Directory');
  get(dbRef).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log('Received data:', data);
      displayDirectory(data);
    } else {
      console.log('No data available');
    }
  }).catch((error) => {
    console.error('Failed to read data:', error);
  });
}

function displayDirectory(data) {
  let tbody = document.querySelector('#directory-table tbody');
  tbody.innerHTML = ''; // Очищаем текущее содержимое tbody

  Object.keys(data).forEach(key => {
      let row = tbody.insertRow();
      let cellId = row.insertCell();
      cellId.textContent = key; // ID сотрудника

      let cellName = row.insertCell();
      cellName.textContent = data[key]; // Имя сотрудника

      let cellActions = row.insertCell();
      // Создаем и добавляем кнопки действий
      let deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = 'Delete'; // Используйте здесь свои иконки
      deleteBtn.classList.add('action-btn', 'delete-icon');
      // Обработчик события удаления
      deleteBtn.onclick = function() { deleteEmployee(key); };

      let editBtn = document.createElement('button');
      editBtn.innerHTML = 'Edit'; // Используйте здесь свои иконки
      editBtn.classList.add('action-btn', 'edit-icon');
      // Обработчик события редактирования
      editBtn.onclick = function() { editEmployee(key); };

      cellActions.appendChild(editBtn);
      cellActions.appendChild(deleteBtn);
  });
}


// Вызываем функцию fetchAndDisplayDirectory для загрузки и отображения данных
fetchAndDisplayDirectory();


// Функции deleteEmployee и editEmployee нужно реализовать в соответствии с вашей логикой
function deleteEmployee(key) {
  console.log('Deleting employee', key);
  // Здесь логика удаления сотрудника из Firebase
}

function editEmployee(key) {
  console.log('Editing employee', key);
  // Здесь логика редактирования сотрудника
}
