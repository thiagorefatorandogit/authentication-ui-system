const validation = new JustValidate('#login-form'); // Verifique se o ID do form é esse

validation
  .addField('#loginEmail', [
    { rule: 'required', errorMessage: 'O e-mail é obrigatório' },
    { rule: 'email', errorMessage: 'Digite um e-mail válido' },
  ], { errorsContainer: '#email-error' }) // <--- Isso aqui é vital!
  .addField('#loginPassword', [
    { rule: 'required', errorMessage: 'A senha é obrigatória' },
    { rule: 'minLength', value: 6, errorMessage: 'mínimo de 6 caracteres' },
  ], { errorsContainer: '#password-error' }) // <--- Isso aqui também!
  .onSuccess((event) => {
    alert('Login validado com sucesso!');
  });