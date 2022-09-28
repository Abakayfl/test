describe('Qalab Tests', () => {
  it('TC-1: user is able to check out with a rental car', () => {
    cy.visit('http://qalab.pl.tivixlabs.com/');
    cy.get('#country').select('Poland');
    cy.get('#city').select('Cracow');
    cy.get('#model').type('Suzuki');
    cy.get('#pickup').type('2022-10-02');
    cy.get('#dropoff').type('2022-10-06');
    cy.get('button[type="submit"]').click();
    cy.xpath('//*[text()="Brown-Bentley"]/..//a').click();
    cy.get('.btn.btn-primary').click();
    cy.get('#name').type('Matt');
    cy.get('#last_name').type('Abakay');
    cy.get('#card_number').type('1234567890123456');
    cy.get('#email').type('abakayfl@outlook.com');
    cy.get('button[type="submit"]').click();
    
  })

  it('TC-2: user gets an error message for entering drop off date before pick up date', () => {
    cy.visit('http://qalab.pl.tivixlabs.com/');
    cy.get('#country').select('Poland');
    cy.get('#city').select('Cracow');
    cy.get('#model').type('Suzuki');
    cy.get('#pickup').type('2022-10-02');
    cy.get('#dropoff').type('2022-10-01');
    cy.get('button[type="submit"]').click();
    cy.get('.alert.alert-danger').contains('Please enter a valid date!');
    
  })
  
  it('TC-3: user gets an error message for entering email in a wrong format', () => {
    cy.visit('http://qalab.pl.tivixlabs.com/');
    cy.get('#country').select('Poland');
    cy.get('#city').select('Cracow');
    cy.get('#model').type('Suzuki');
    cy.get('#pickup').type('2022-10-02');
    cy.get('#dropoff').type('2022-10-06');
    cy.get('button[type="submit"]').click();
    cy.xpath('//*[text()="Brown-Bentley"]/..//a').click();
    cy.get('.btn.btn-primary').click();
    cy.get('#name').type('Matt');
    cy.get('#last_name').type('Abakay');
    cy.get('#card_number').type('1234567890123456');
    cy.get('#email').type('abakayfloutlook.com');
    cy.get('button[type="submit"]').click();
    cy.get('.alert.alert-danger').contains('Please provide valid email');
  })


})







