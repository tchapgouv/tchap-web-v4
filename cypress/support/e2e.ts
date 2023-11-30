/*
Copyright DINUM 2023
*/

/// <reference types="cypress" />

import "cypress-real-events";
import "@testing-library/cypress/add-commands";

import "./loginByEmail";
import "./rooms";

import "matrix-react-sdk/cypress/support/client";
import "matrix-react-sdk/cypress/support/bot";
import "matrix-react-sdk/cypress/support/composer";
