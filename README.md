# 🧪 Accessibility Testing

This repository contains a beta implemantion for accessibility testing accross Perlego's app. The objective of this to execute testing accross the application and validate where accessibility is failing in Perlego. 

## 🧑‍💻 Tech Stack 

This repo is written in `ts` & `cypress`, `cypress-axe` is being used to test the accessibility of the application. 

## 🏃 Running the tests

- Launching Cypress Runner
`npx cypress open`

This will throw the following in the terminal indicating the accissibility violations.

<img width="1331" alt="image" src="https://github.com/Perlego/accessibility-testing/assets/133763720/97e12106-55e8-4cb1-9628-47fa4a97b652">

A rating system has been put in place to guage the severity of issues that arise.

<img width="158" alt="Screenshot 2023-07-17 at 12 27 16" src="https://github.com/Perlego/accessibility-testing/assets/70587412/0b706892-fd44-48fb-882d-2754022bb767">

The failures will look as follow in the cypresss runner

<img width="669" alt="Screenshot 2023-07-17 at 12 29 38" src="https://github.com/Perlego/accessibility-testing/assets/70587412/1d4ce7f3-a9d1-4692-852f-339f45c9c44c">

Each failure will also link directly to a source which identifies the issue, why it matters and how to fix. These are all taken from the WCAG guidelines.

<img width="954" alt="Screenshot 2023-07-17 at 12 27 58" src="https://github.com/Perlego/accessibility-testing/assets/70587412/03321a52-8868-4cf3-8299-e3cda91d4248">

- Running cypress headless mode
`npx cypress run`

This will throw the following in the terminal (if there are failures)
<img width="1331" alt="image" src="https://github.com/Perlego/accessibility-testing/assets/133763720/d0490333-0650-4760-ae9e-0be78ad6aa8b">

## ⚠️ Disclaimer
This is still in stage zero of QA. 
