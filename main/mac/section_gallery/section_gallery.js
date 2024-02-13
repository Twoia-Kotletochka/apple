function selectButton(button) {
  // Удаляем класс 'active' у всех кнопок
  document.querySelectorAll('.button').forEach(btn => {
    btn.classList.remove('active');
  });

  // Добавляем класс 'active' выбранной кнопке
  button.classList.add('active');
}

