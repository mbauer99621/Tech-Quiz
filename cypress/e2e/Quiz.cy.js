
describe("Quiz Component", ()=>{
    beforeEach(()=>{
        cy.visit("/")})

    it("Start",()=>{
        cy.get("button").contains("Start Quiz");
    })
    it("Show Question",()=>{
        cy.get("button").contains("Start Quiz").click();
        cy.get('.card').should("be.visible");
    })
    it("Finish",()=>{
        cy.get("button").contains("Start Quiz").click();
        cy.get('.card').should("be.visible");
        cy.get("button").contains("1").click();
        cy.get("button").contains("1").click();
        cy.get("button").contains("1").click();
        cy.get("button").contains("1").click();
        cy.get("button").contains("1").click();
        cy.get("button").contains("1").click();
        cy.get("button").contains("1").click();
        cy.get("button").contains("1").click();
        cy.get("button").contains("1").click();
        cy.get("button").contains("1").click();
        cy.get("h2").contains("Quiz Completed");
    })




}) 