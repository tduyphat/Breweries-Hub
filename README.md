# Breweries App

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

This project was done as a homework to practice React with TypeScript and also stylizing using Material UI. The application fetches the data of breweries from [Open Brewery DB](https://www.openbrewerydb.org/documentation) and displays them to users in cards. There are multiple filtering features for the displayed cards like searching by keywords, pagination, sorting by names and limiting the number of returned cards. There is also a contact form so users can send their feedback or question.

## Table of content

1. [Technologies](#technologies)
2. [Project Structure](#project-structure)
3. [User Interface](#user-interface)
3. [Getting Started](#getting-started)

## Technologies

- TypeScript
- React
- Material-UI

## Project Structure
````
src/
┣ components/
┃ ┣ AppPagination.tsx
┃ ┣ BreweriesSorter.tsx
┃ ┣ BreweryCard.tsx
┃ ┣ CardsContainer.tsx
┃ ┣ FiltersContainer.tsx
┃ ┣ NavBar.tsx
┃ ┣ ReturnsLimiter.tsx
┃ ┗ SearchBox.tsx
┣ interfaces/
┃ ┣ AppPaginationProps.tsx
┃ ┣ BreweriesSorterProps.tsx
┃ ┣ Brewery.tsx
┃ ┣ FormData.tsx
┃ ┣ ReturnsLimiterProps.tsx
┃ ┗ SearchBarProps.tsx
┣ pages/
┃ ┣ BreweryDetails.tsx
┃ ┣ Contact.tsx
┃ ┣ ErrorPage.tsx
┃ ┣ Home.tsx
┃ ┗ Root.tsx
┣ App.tsx
┣ index.css
┣ index.tsx
┣ react-app-env.d.ts
┣ reportWebVitals.ts
┗ setupTests.ts

````

## User Interface

In the home page of the application, the breweries are displayed in ascending order by name by default:

![IMG1](screenshots\Screenshot 2023-09-18 013730.jpg)

Typing in the search field will return the brewery matched the query:

![IMG2](screenshots\Screenshot 2023-09-18 013830.jpg)

A message will be displayed if no matched result is found:

![IMG3](screenshots\Screenshot 2023-09-18 013855.jpg)

The return limiter can be used to limit the breweries returned from the API. Noitice the number of pages will also change accordingly to the total breweries:

![IMG4](screenshots\Screenshot 2023-09-18 014000.jpg)

Clicking on the "Learn More" button on each card will take users to the details page of that brewery:

![IMG5](screenshots\Screenshot 2023-09-18 015232.jpg)

The contact form includes four input fields that must be filled out before submission. Successfully submitting the form will display a success message:

![IMG6](screenshots\Screenshot 2023-09-18 014125.jpg)

![IMG7](screenshots\Screenshot 2023-09-18 014138.jpg)

![IMG8](screenshots\Screenshot 2023-09-18 014222.jpg)

## Getting Started

1. Open your terminal and clone the repository with the following command: 
```
git clone https://github.com/tduyphat/fs16_5-React-Breweries
```

2. Install all the packages:

```
npm install
```

3. Start the application in your local machine:

```
npm start
```

4. Or simply access the deployed version on Netlify at: [phat-tran-breweries.netlify.app](phat-tran-breweries.netlify.app)









