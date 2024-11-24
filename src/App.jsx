// src/App.jsx

import Banner from './components/Banner';
import CourseList from './components/CourseList';
//  Added these imports for React Query and our fetch utility
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';

// Removed the hardcoded schedule data

const Main = () => {
  // Replaced the hardcoded schedule with data fetching
  const [data, isLoading, error] = useJsonQuery(
    'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php'
  );

  // Handling loading and error states according to the react-query documentation
  if (error) return <h1>Error loading course data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading course data...</h1>;
  if (!data) return <h1>No course data found</h1>;

  return (
    <>
      <Banner title={data.title} />
      <CourseList courses={data.courses} />
    </>
  );
};

// Created a QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="min-h-screen bg-gray-100">
      <Main />
    </div>
  </QueryClientProvider>
);

export default App;

   // Implementation:
// I chose to use tailwind instead of bootstrap because I find that tailwind has more options for customization
// additionally, I don't find it particularly difficult to use. I also like that tailwind is a utility-first CSS framework

//NOTE ON NOTES AND COMMENTS:
//The reason I am including lots of notes and comments in files isn't really to make sure its more
// readable for you, but more so to make sure that I understand what I am doing and why I am doing it.
// I find that writing out my thoughts and the reasons behind my decisions helps me to understand the code better.
// In a real-world scenario, I would likely not include as many comments in the code,
// as I would be working with a team of developers who would be able to understand much of the code without the comments.