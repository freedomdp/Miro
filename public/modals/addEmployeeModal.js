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
