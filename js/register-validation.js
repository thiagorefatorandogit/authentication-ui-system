const validation = new JustValidate('#register-form', {
  errorFieldCssClass: 'border-red-500',
  errorLabelStyle: {
    color: '#ef4444',
    fontSize: '0.875rem',
  },
});

// Configuração dos campos com destino do erro (errorsContainer)
validation
  .addField('#inputName', [
    { rule: 'required', errorMessage: 'O nome é obrigatório' },
    { rule: 'minLength', value: 3, errorMessage: 'Mínimo de 3 caracteres' },
  ], { errorsContainer: '#name-error' })

  .addField('#inputEmail', [
    { rule: 'required', errorMessage: 'O e-mail é obrigatório' },
    { rule: 'email', errorMessage: 'Digite um e-mail válido' },
  ], { errorsContainer: '#email-error' })

  .addField('#inputPassword', [
    { rule: 'required', errorMessage: 'A senha é obrigatória' },
    { rule: 'minLength', value: 6, errorMessage: 'Mínimo de 6 caracteres' },
  ], { errorsContainer: '#password-error' })
  
  .addField('#inputConfirmPassword', [
    { rule: 'required', errorMessage: 'Confirme sua senha' },
    {
      validator: (value, fields) => value === fields['#inputPassword'].elem.value,
      errorMessage: 'As senhas não coincidem',
    },
  ], { errorsContainer: '#confirm-password-error' });

// Lógica do eye (Senha e Confirmar)
document.addEventListener("DOMContentLoaded", () => {
  const setupToggle = (toggleId, inputId) => {
    const toggle = document.querySelector(toggleId);
    const input = document.querySelector(inputId);
    if (toggle && input) {
      toggle.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        toggle.classList.toggle('fa-eye');
        toggle.classList.toggle('fa-eye-slash');
      });
    }
  };
  setupToggle('#togglePassword', '#inputPassword');
  setupToggle('#toggleConfirmPassword', '#inputConfirmPassword');
});