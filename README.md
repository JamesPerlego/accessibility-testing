# 🧪 Accessibility Testing

This repository contains a beta implemantion for accessibility testing accross Perlego's app. The objective of this to execute testing accross the application and validate where accessibility is failing in Perlego. 

## 🧑‍💻 Tech Stack 

This repo is written in `ts` & `cypress`, `cypress-axe` is being used to test the accessibility of the application. 

## 🏃 Running the tests

- Launching Cypress Runner
`npx cypress open`

This will throw the following in the terminal indicating the accissibility violations.

<img width="1331" alt="image" src="https://github.com/Perlego/accessibility-testing/assets/133763720/97e12106-55e8-4cb1-9628-47fa4a97b652">

The failure will look as follow in the cypresss runner

<img width="1331" alt="image" src="https://github.com/Perlego/accessibility-testing/assets/133763720/bb3f1e53-a1bf-4fed-81bd-3ac2a653200a">

- Running cypress headless mode
`npx cypress run`

This will throw the following in the terminal (if there are failures)
<img width="1331" alt="image" src="https://github.com/Perlego/accessibility-testing/assets/133763720/d0490333-0650-4760-ae9e-0be78ad6aa8b">

## ⚠️ Disclaimer
This is still in stage zero of QA. 
