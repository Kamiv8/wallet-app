[![logoapp.png](https://i.postimg.cc/BQhk3q07/logoapp.png)](https://postimg.cc/tYx2tG7F)

# Wallet App

## Project Description

Wallet App is a user-friendly application designed for easy and efficient financial management and note-taking. It allows users to create accounts, record financial transactions, generate charts and reports, and add notes with the option to create to-do lists.

## Technologies

### Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
[![57233884-20344080-6fe5-11e9-8df3-0df1282e1574-1.png](https://i.postimg.cc/mk27jWhK/57233884-20344080-6fe5-11e9-8df3-0df1282e1574-1.png)](https://postimg.cc/Fd8fFqyx)
[![Group-41.png](https://i.postimg.cc/SQD6sRv4/Group-41.png)](https://postimg.cc/23Lb9kY9)
[![Group-43.png](https://i.postimg.cc/3xDmnBJr/Group-43.png)](https://postimg.cc/G4d4pvy6)

### Backend

![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
[![Group-42.png](https://i.postimg.cc/TwQDpNQ0/Group-42.png)](https://postimg.cc/9RRMkp6w)
[![Group-44.png](https://i.postimg.cc/0ymKpycb/Group-44.png)](https://postimg.cc/fVzbsD4N)
[![Group-45.png](https://i.postimg.cc/1t49rWsJ/Group-45.png)](https://postimg.cc/HcDDp9Jy)

## Implementation

### Frontend

The project utilizes the atomic design methodology, and a custom React hook is implemented for form handling, integrated with validation and displayed modals [see here].

### Backend

The server-side architecture is based on the "clean architecture," the Mediator design pattern, and Command Query Separation (CQS), simplifying the application's development process and improving testability.

## Features

### User Authentication

To use the application, users must create an account and confirm the account activation by clicking on the link sent to the provided email address.

[![register.png](https://i.postimg.cc/8cXH2z6h/register.png)](https://postimg.cc/V0MnM146) [![login.png](https://i.postimg.cc/KvVfQ4Fb/login.png)](https://postimg.cc/VdqXkfdZ)

### Transaction Management

The core function of the application allows users to create monetary transactions (income and expenses) using a form for visualization. Additionally, the app enables saving transactions for reuse without re-entering data.

[![add-transaction.png](https://i.postimg.cc/SKZJ7YF7/add-transaction.png)](https://postimg.cc/CZqhw1Kz) [![default-transaction-list.png](https://i.postimg.cc/59XFggtH/default-transaction-list.png)](https://postimg.cc/w3dvThLH) [![history.png](https://i.postimg.cc/DwTJ2KPs/history.png)](https://postimg.cc/mtm2wJq2) [![transaction-details.png](https://i.postimg.cc/mDthdZTx/transaction-details.png)](https://postimg.cc/sQCVxrBK)

### Category managment

The ability to create custom categories for easier tracking of expenses in a specific field.

[![category-panel.png](https://i.postimg.cc/7LP52McZ/category-panel.png)](https://postimg.cc/BjyZWD4r)

### Multi-Currency Support

Users can input transactions in various available currencies (PLN, EUR, USD, CHF, GBP).

### Notes

Users can add notes as to-do lists, for example, for shopping lists.
[![add-note.png](https://i.postimg.cc/t70bNp4z/add-note.png)](https://postimg.cc/zHk4JmWL) [![note-table.png](https://i.postimg.cc/NfT2q0mB/note-table.png)](https://postimg.cc/nCFhqp3P)
[![note-details.png](https://i.postimg.cc/jqBnFfWM/note-details.png)](https://postimg.cc/CdHKZzs8)

### Language Switching

The application is available in both Polish and English.

## Future Enhancements

- Paycheck Calculation: A feature to help track expenses for individuals with fixed monthly expenditures.
- Larger Screen Support: Ability to use the app on larger screens, not limited to smartphones.
- PDF Reports: Generate PDF reports of all transactions for a specific month.
- User Groups: Create and manage budgets collaboratively with shared user groups.
- Currency Conversion: Convert currencies to Polish Zloty based on the current exchange rate provided by the National Bank of Poland (NBP).
