# Objective
This assignment aims to deepen understanding of the useEffect hook in React by applying it to a practical scenario: fetching data from the Star Wars API (SWAPI).By creating a component that fetches character data, displays this data, and incorporates loading states and error handling to manage the fetch operation's various states effectively.

## Instructions
### Part 1: Fetching Data with useEffect
- Create a New Component:

In project's components directory, created a file named StarWarsCharacter.js for fetching data about a specific Star Wars character from the SWAPI.

- Implement Data Fetching Logic:

- Used the useEffect hook to initiate the data fetch when the component mounts.
- Fetch character data from https://swapi.dev/api/people/{id}/, {id}  is used to choose a Star Wars character.
- Managed the fetched data's state, the loading state, and any errors that might occur during the fetch operation using useState.
### Part 2: Managing Loading and Error States
- Implement Loading State:

- Introduced a boolean state variable to track the loading status of the API request.
- While data is being fetched, displayed a "Loading..." message in component.
- Implemented Error Handling:

- Used a try-catch block inside the data fetching function to handle any errors during the fetch operation.
### Part 3: Displaying Fetched Data
Once the data is successfully fetched and the component's state is updated, displayed the Star Wars character's name and any other relevant information.
### Part 4: GitHub Repository Update
Commit and pushed the Changes:
Made sure all changes are committed to Git repository with descriptive commit messages and pushed to keep the Repository updated.




## Getting Started with npm to diplay results in the browser

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

