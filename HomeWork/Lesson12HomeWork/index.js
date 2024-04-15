// Задача1:
// создать форму состоящую из логин, пароль и повторите пароль и кнопки отправить
// при нажатии на кнопку отправить производится праверка - если пароль и повторите пароль совпадают - тогда пользователю выводится сообщение: данные отправлены
// иначе выводится сообщение пароль и повторите пароль не совпадают...

const functionForme = () => {
  const form1 = document.forms.formName;
  const passwordValue = form1.elements.password.value;
  const repeatPasswordValue = form1.elements.RepeatPassword.value;
  const usernameValue = form1.elements.username.value;

  if (passwordValue === repeatPasswordValue && usernameValue !== null) {
    alert("данные отправлены");
  } else {
    alert("повторите ввод, пароли не совпадают");
  }
};
document.getElementById("formId").addEventListener("submit", functionForme);
