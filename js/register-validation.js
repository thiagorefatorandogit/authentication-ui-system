const validation = new JustValidate('#register-form', {
  errorFieldCssClass: 'border-red-500',
  errorLabelStyle: {
    color: '#ef4444',
    fontSize: '0.875rem',
  },
});

// Nome
validation.addField('#inputName', [
  {
    rule: 'required',
    errorMessage: 'O nome é obrigatório',
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'O nome deve ter no mínimo 3 caracteres',
  },
]);

// Email
validation.addField('#inputEmail', [
  {
    rule: 'required',
    errorMessage: 'O e-mail é obrigatório',
  },
  {
    rule: 'email',
    errorMessage: 'Digite um e-mail válido',
  },
]);

// Senha
validation.addField('#inputPassword', [
  {
    rule: 'required',
    errorMessage: 'A senha é obrigatória',
  },
  {
    rule: 'minLength',
    value: 6,
    errorMessage: 'A senha deve ter no mínimo 6 caracteres',
  },
]);

// Confirmar senha
validation.addField('#inputConfirmPassword', [
  {
    rule: 'required',
    errorMessage: 'Confirme sua senha',
  },
  {
    validator: (value, fields) => {
      return value === fields['#inputPassword'].elem.value;
    },
    errorMessage: 'As senhas não coincidem',
  },
]);


// Sucesso
validation.onSuccess((event) => {
  event.preventDefault();

  console.log('Formulário válido ✔');

  event.target.submit();
});


// =========================
// OLHO DA SENHA
// =========================

document.addEventListener("DOMContentLoaded", function () {

  // senha
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#inputPassword');

  if (togglePassword && password) {
    togglePassword.addEventListener('click', () => {
      const type = password.type === 'password' ? 'text' : 'password';
      password.type = type;

      togglePassword.classList.toggle('fa-eye');
      togglePassword.classList.toggle('fa-eye-slash');
    });
  }

  // confirmar senha
  const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
  const confirmPassword = document.querySelector('#inputConfirmPassword');

  if (toggleConfirmPassword && confirmPassword) {
    toggleConfirmPassword.addEventListener('click', () => {
      const type = confirmPassword.type === 'password' ? 'text' : 'password';
      confirmPassword.type = type;

      toggleConfirmPassword.classList.toggle('fa-eye');
      toggleConfirmPassword.classList.toggle('fa-eye-slash');
    });
  }

});