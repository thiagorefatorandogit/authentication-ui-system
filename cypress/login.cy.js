describe('Módulo de Login', () => {
  
  beforeEach(() => {
    cy.visit('/login-autentication/member-login-portal.html');
  });

  it('Deve validar erro de formato com e-mail inválido do Patolino', () => {
    cy.get('#loginEmail').type('patolino.dev'); 
    cy.get('button[type="submit"]').click();

    cy.get('#email-error')
      .should('not.be.empty') 
      .and('contain', 'Digite um e-mail válido');
  });

  it('Deve validar senha curta para o perfil do Patolino', () => {
    cy.get('#loginEmail').type('patolino.dev@gmail.com');
    cy.get('#loginPassword').type('123'); 
    cy.get('button[type="submit"]').click();

    cy.get('#password-error')
      .should('not.be.empty')
      .and('contain', 'mínimo de 6 caracteres');
  });

  it('Deve realizar login com sucesso usando Patolino', () => {
    const userEmail = 'patolino.dev@gmail.com';
    
    cy.get('#loginEmail').type(userEmail);
    cy.get('#loginPassword').type('Patolino@2026'); 
    
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login validado com sucesso!');
    });

    cy.get('button[type="submit"]').click();
  });
});