
///reference types="cypress" />


it('GDIC SQA HIRING AUTOMATION TASK', function () {
//  1. a Searching product like motor
  cy.visit('https://cal.green-delta.com/motor-insurance/');
  cy.screenshot()
  cy.get('#searchIcon > span > .fas').click();
  cy.screenshot();
  cy.get('.proinput').type('Motor{enter}');
  cy.screenshot()

  //b(i) checking mandatory fields
  cy.visit('https://cal.green-delta.com/motor-insurance/');
  cy.get('#getMotorQuoteButton').click();
  cy.screenshot()

  //b(ii) check numeric value
  cy.visit('https://cal.green-delta.com/motor-insurance/');
  cy.get('#sumInsured').click();
  cy.get('#sumInsured').type('w');
  
  //cy.screenshot()
  //cy.wait(10000);

 //b (iii) select vehicle type like 'Car'
  cy.visit('https://cal.green-delta.com/motor-insurance/');
  cy.get('#motorProductName').select('Car').should('have.value','Car')
  //cy.screenshot()
   
// b(v)Terms of use clicking
  cy.visit('https://cal.green-delta.com/motor-insurance/');
  cy.get('.footer-bottom-list > li > a').click();
  cy.screenshot()
  // b(iv) clicking back option
  cy.go('back');  
  cy.screenshot()

//b(vi)After clicking Back option will be clickable and successfully landing page


  cy.get('#motorProductStep > fieldset > h5').invoke('text').then((textOfElement) => {
    expect(textOfElement.trim()).to.equal('Effective Insurance provider for vehicles');
    cy.screenshot()


 //b(ii) check numeric value
  cy.visit('https://cal.green-delta.com/motor-insurance/');
  cy.get('#sumInsured').type('p')
  cy.get('#bikeccvalue').click();
  cy.screenshot()
  //extra tests

  cy.get('#bikeccvalue').type('Motor{enter}');
  cy.get('#bikeccvalue').click();
  cy.get('#bikeccvalue').type("mm");
 
 //full form submission
  cy.visit('https://cal.green-delta.com/motor-insurance/');
 

  cy.get('#motorProductName').select('Car').should('have.value','Car')
  cy.get('#vehicleType').select('Private').should('have.value','Private')
  cy.get('#noofpassenger').type('6')
  cy.get('#ccorton').select('SEAT').should('have.value','SEAT')
  cy.get('#bikeccvalue').type('10')
  cy.get('#sumInsured').type('10000')


  cy.get('#policyPeriod').select('Full').should('have.value','Full')
  cy.get('#vehicleRegistrationNumber').type('E-0017')
  cy.get('#customerSearchType').select('MobileNo').should('have.value','MobileNo')
  cy.get('#comprehensiveCustomerSearchTypeValue').type('+8801545201258')
  cy.screenshot()
  cy.get('#riotAndStrike').click()
  cy.screenshot()

  //fill up other mandatory fields
  cy.get('#noofdriver').type('1')
  cy.get('#policyStartDate').click()
  cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
  cy.screenshot()

  cy.get('#getMotorQuoteButton').click()
  cy.screenshot()
 
  
 //back button click after successful submission
 cy.get('#motorsumInsuredBox > .top-nav > li > .mt-1').click()
 

 cy.screenshot()
  
  });
});
