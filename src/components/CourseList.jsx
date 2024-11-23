// src/components/CourseList.jsx


const CourseList = ({ courses }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {Object.entries(courses).map(([id, course]) => (
        <div 
          key={id} 
          // Added h-full to ensure all cards in a row have the same height
          // Added flex flex-col to enable vertical flex container
          // This allows flex-grow to work on the title paragraph
          className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
        >
          <h3 className="font-bold">
            {course.term} CS {course.number}
          </h3>
          {/* Added flex-grow to push the meeting times to the bottom
              This ensures meeting times align across all cards in a row */}
          <p className="mt-2 text-sm flex-grow">{course.title}</p>
          <p className="mt-2 text-gray-500 text-sm">{course.meets}</p>
        </div>
      ))}
    </div>
  );
  
  export default CourseList;
   //NOTES:

   // BUGS?:
 //sonarLint seems to have a problem with us not using props validation in this file,
 // but it as this is an individual project I know that courses are in a key-value object 
 // and that the values are objects with the properties term, number, title, and meets.
 // We can ignore this warning for now, but for larger scale enterprise applications,
 // it is a good idea to use prop validation because it helps to catch bugs early on,
 // and it also serves as documentation for other developers who may be working on the code.
