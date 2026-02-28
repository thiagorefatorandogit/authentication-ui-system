// Inicialização da biblioteca
const validation = new JustValidate('#register-form');

// Validações dos campos
validation
    .addField('#inputName', [
        {
            rule: 'required',
            errorMessage: 'O nome é obrigatório',
        },
    ])
    .onSuccess((event) => {
        event.target.submit();
    });
