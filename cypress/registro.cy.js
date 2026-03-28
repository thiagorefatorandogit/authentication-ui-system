describe('Módulo de Registro', () => {

    beforeEach(() => {
        // Porta 3000 conforme o ambiente
        cy.visit('/register-autentication/auth-member-registration.html');
    });

    it('Deve validar erro de e-mail e visibilidade da senha', () => {
        // 1. Validar erro de e-mail
        cy.get('#inputEmail').type('patolino.dev');
        cy.get('button[type="submit"]').click();

        // Agora o Just-Validate joga o erro dentro da div #email-error
        cy.get('#email-error')
            .should('be.visible')
            .and('contain', 'Digite um e-mail válido');

        // 2. Validar o "Olhinho" da Senha
        // Verifica se começa como password
        cy.get('#inputPassword').should('have.attr', 'type', 'password');

        // Clica no ícone do olho
        cy.get('#togglePassword').click();

        // Verifica se mudou para text
        cy.get('#inputPassword').should('have.attr', 'type', 'text');
    });

    it('Deve validar senhas divergentes', () => {
        cy.get('#inputPassword').type('Brito123');
        cy.get('#inputConfirmPassword').type('Brito456');
        cy.get('button[type="submit"]').click();

        cy.get('#confirm-password-error')
            .should('be.visible')
            .and('contain', 'As senhas não coincidem');
    });
});