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
  // Создаём таблицу
  let table = document.createElement('table');
  table.setAttribute('id', 'directory-table');

  // Создаём заголовки для таблицы
  let thead = table.createTHead();
  let row = thead.insertRow();
  let headers = ['ID', 'Employee Name'];
  headers.forEach(headerText => {
    let header = document.createElement('th');
    header.textContent = headerText;
    row.appendChild(header);
  });

  // Заполняем таблицу данными
  let tbody = table.createTBody();
  Object.keys(data).forEach(key => {
    let row = tbody.insertRow();
    let cell = row.insertCell();
    cell.textContent = key; // ID сотрудника
    cell = row.insertCell();
    cell.textContent = data[key]; // Имя сотрудника
  });

  // Добавляем таблицу в контейнер
  let container = document.getElementById('directory-container');
  container.appendChild(table);
}


// Вызываем функцию fetchAndDisplayDirectory для загрузки и отображения данных
fetchAndDisplayDirectory();
