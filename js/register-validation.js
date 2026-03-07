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

// Telefone (opcional, mas validado se preenchido)
validation.addField('#inputPhone', [
  {
    rule: 'customRegexp',
    value: /^[0-9()\-\s]+$/,
    errorMessage: 'Digite um telefone válido',
  },
]);

// Sucesso
validation.onSuccess((event) => {
  event.preventDefault();

  console.log('Formulário válido ✔');

  // Aqui você pode enviar via fetch
  event.target.submit();
});