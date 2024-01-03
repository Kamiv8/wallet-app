# Wallet App

![Logo](path/to/logo)

## Project Description

Wallet App is a user-friendly application designed for easy and efficient financial management and note-taking. It allows users to create accounts, record financial transactions, generate charts and reports, and add notes with the option to create to-do lists.

## Technologies

### Frontend

- React.js
- Styled-components
- Typescript
- Storybook
- Chart.js
- Axios
- Yup
- React-Intl

### Backend

- .NET
- T-SQL
- Entity Framework
- MediatR
- Fluent Validation

## Implementation

### Frontend

The project utilizes the atomic design methodology, and a custom React hook is implemented for form handling, integrated with validation and displayed modals [see here].

### Backend

The server-side architecture is based on the "clean architecture," the Mediator design pattern, and Command Query Separation (CQS), simplifying the application's development process and improving testability.

## Features

### User Authentication

To use the application, users must create an account and confirm the account activation by clicking on the link sent to the provided email address.
![Registration](path/to/registration/image)
![Login](path/to/login/image)

### Transaction Management

The core function of the application allows users to create monetary transactions (income and expenses) using a form for visualization. Additionally, the app enables saving transactions for reuse without re-entering data.
![Transaction Creation](path/to/transaction/creation/image)
![Transaction History](path/to/transaction/history/image)
![Transaction Details](path/to/transaction/details/image)

### Multi-Currency Support

Users can input transactions in various available currencies (PLN, EUR, USD, CHF, GBP).

### Notes

Users can add notes as to-do lists, for example, for shopping lists.
![Notes](path/to/notes/image)
![Note Form](path/to/note/form/image)

### Language Switching

The application is available in both Polish and English.

## Future Enhancements

- Paycheck Calculation: A feature to help track expenses for individuals with fixed monthly expenditures.
- Larger Screen Support: Ability to use the app on larger screens, not limited to smartphones.
- PDF Reports: Generate PDF reports of all transactions for a specific month.
- User Groups: Create and manage budgets collaboratively with shared user groups.
- Currency Conversion: Convert currencies to Polish Zloty based on the current exchange rate provided by the National Bank of Poland (NBP).
