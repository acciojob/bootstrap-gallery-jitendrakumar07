//your JS code here. If required.
$(document).ready(function(){
      $('.gallery-image').on('click', function(){
        var imgSrc = $(this).attr('src');
        $('#lightboxImage').attr('src', imgSrc);
      });
    });
	  () => { 
    cy.get('.section').should('have.length', 10); // Expect 10 sections
    cy.get('img').should('have.length', 0); // No images
    cy.get('h6').should('have.length', 0); // No h6
    cy.get('p').should('have.length', 0); // No paragraphs
}