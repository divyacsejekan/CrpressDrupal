import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
const url = "http://localhost:8888/";

// Given I open Drupalwebsite
Given("I open Drupalwebsite", () => {
  cy.visit(url);
});


