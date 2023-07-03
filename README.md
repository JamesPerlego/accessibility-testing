# 🧪 Accessibility Testing

This repository contains a beta implemantion for accessibility testing accross Perlego's app. The objective of this to execute testing accross the application and validate where accessibility is failing in Perlego. 

## 🧑‍💻 Tech Stack 

This repo is written in `ts` & `cypress`, `cypress-axe` is being used to test the accessibility of the application. 

## 🏃 Running the tests

Launching Cypress Runner
`npx cypress open`

When a test is run, this will throw the following in the terminal indicating the accissibility violations.

<img width="1331" alt="image" src="https://github.com/Perlego/accessibility-testing/assets/133763720/97e12106-55e8-4cb1-9628-47fa4a97b652">

The failure will look as follow in the cypresss runner

<img width="1468" alt="image" src="https://github.com/Perlego/accessibility-testing/assets/133763720/bb3f1e53-a1bf-4fed-81bd-3ac2a653200a">


## ⚠️ Disclaimer
This is still in stage zero of QA. 
