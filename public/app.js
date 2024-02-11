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

// Функция для записи данных
function writeData() {
  set(ref(database, 'test/path'), {
    exampleField: 'Hello, Firebase!'
  }).then(() => {
    console.log('Data written successfully!');
    readData(); // Читаем данные после успешной записи
  }).catch((error) => {
    console.error('Failed to write data:', error);
  });
}

// Функция для чтения данных
function readData() {
  get(ref(database, 'test/path')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log('Received data:', snapshot.val());
    } else {
      console.log('No data available');
    }
  }).catch((error) => {
    console.error('Failed to read data:', error);
  });
}

// Вызываем функцию writeData для демонстрации
writeData();
