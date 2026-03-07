const validation = new JustValidate('#login-form');

validation
  .addField('#loginEmail', [
    {
      rule: 'required',
      errorMessage: 'E-mail é obrigatório',
    },
    {
      rule: 'email',
      errorMessage: 'Digite um e-mail válido',
    },
  ])
  .addField('#loginPassword', [
    {
      rule: 'required',
      errorMessage: 'Senha é obrigatória',
    },
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'A senha deve ter no mínimo 6 caracteres',
    },
  ])
  .onSuccess((event) => {
    event.preventDefault();

    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;

    console.log('Email:', email);
    console.log('Password:', password);

    alert('Login validado com sucesso!');
  });