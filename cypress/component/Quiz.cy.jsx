import Quiz from '../../client/src/components/Quiz';


describe("Quiz Component", ()=>{
    beforeEach(()=>{
        cy.intercept({
        method: "GET",
        url: "/api/questions/random",
    }, 
    {
        fixture: "example.json",
        statusCode: 200,
    }
    )})

    it("Start",()=>{
        cy.mount(<Quiz />)
        cy.get("button").contains("Start Quiz");
    })
    it("Show Question",()=>{
        cy.mount(<Quiz />)
        cy.get("button").contains("Start Quiz").click();
        cy.get('.card').should("be.visible");
    })
    it("Finish",()=>{
        cy.mount(<Quiz />)
        cy.get("button").contains("Start Quiz").click();
        cy.get('.card').should("be.visible");
        cy.get("button").contains("1").click();
        cy.get("h2").contains("Quiz Completed");
    })




}) 