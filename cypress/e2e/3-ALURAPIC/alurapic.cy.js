/// <reference types="cypress" />
describe("Login e registro de usuario alura pic", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
    cy.viewport(1440, 900);
  });
  it("Verificar mensagens validação", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
  });
  it("Verificar mensagens de email invalido", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="email"]').type("graciliana");
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });
  // it("Verificar mensagens de email invalido", () => {
  //   cy.contains("a", "Register now").click();
  //   cy.contains("button", "Register").click();
  //   cy.get('input[formcontrolname="email"]').type("graciliana@gmail");
  //   cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  // });
  it("Verificar mensagens de email valido", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="email"]').type("graciliana@gmail.com");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
  });

  it("Verificar mensagens de nome Invalido", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="email"]').type("graciliana@gmail.com");
    cy.get('input[formcontrolname="fullName"]').type(
      "Graciliana Alves Kascher"
    );
    cy.get('input[formcontrolname="userName"]').type("g");
    cy.contains("button", "Register").click();
  });

  it("Verificar mensagens de senha com menos de 8 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="password"]').type("123");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });
  it("Verificar mensagens de senha com menos de 8 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="userName"]').type("TESTE");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });
});
