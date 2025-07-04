import React from 'react';
import './Components/CourseCardProps/CourseCardProps.css';
import DarkModeToggle from './Components/DarkModeToggle';

 

function App() {

 // These are individual course objects.
// Each object groups together related details about a specific course.
// Instead of passing multiple separate props, we use one object per course.
// eslint-disable-next-line no-lone-blocks
{/* 
const course1 = {
  // URL for the image shown at the top of the card
  image: "https://static.wixstatic.com/media/3b1b2f_062e8a65595d4bfea5034800a1dedb1b~mv2.jpeg/v1/fill/w_388,h_600,al_c,q_80,enc_avif,quality_auto/file.jpeg",

  // Label/tag for the course category
  tag: "Pega Constellation",

  // Course title
  title: "Pega Constellation Foundation Batch 3",

  // Short description of what the course is about
  description: "Learn modular design, data models, REST, and UI in Pega Constellation.",

  // Date range when the course takes place
  date: "03rd June to 19th June",

  // Class schedule and timing
  classes: "6 Classes – Tue & Thu (16:30 - 18:30 CET)",

  // Discounted price (new price)
  price: "40.00",

  // Original price before discount
  oldPrice: "60.00"
};

const course2 = {
  image: "https://static.wixstatic.com/media/b42676_fc27da84d9d34af682d099e782dd48e0~mv2.png/v1/fill/w_433,h_503,al_c,q_85,enc_avif,quality_auto/file.png",
  tag: "Pega Integration",
  title: "Pega Integration Masterclass",
  description: "Master REST, SOAP, Kafka, and system integration best practices.",
  date: "10th July to 25th July",
  classes: "6 Classes – Mon & Wed (17:00 - 18:30 CET)",
  price: "55.00",
  oldPrice: "75.00"
};

const course3 = {
  image: "https://academy.pega.com/sites/default/files/h5p/content/264901/images/imageAfter-5de6eee3446be.png",
  tag: "Case Management",
  title: "Advanced Case Management in Pega",
  description: "Automate complex workflows and case routing with real-world use cases.",
  date: "01st Sept to 15th Sept",
  classes: "6 Classes – Wed & Fri (17:00 - 18:30 CET)",
  price: "50.00",
  oldPrice: "70.00"
};

*/}

  return (
    <div className="card-container">



    {/* 
        Practice 1 – You can create and use another component here (e.g., <MyButton />),
        but it's currently commented out.
      */}
      {/* <MyButton /> */}




      {/* 
        Practice 2 – Displaying Course Cards using the CourseCardProps component.
        We're calling the same component 3 times but with different "props".
        Props are custom attributes like `image`, `title`, `price`, etc.,
        which allow us to reuse the same component for different content.
      */}

     {/* 
      <CourseCardProps
        image="https://static.wixstatic.com/media/3b1b2f_062e8a65595d4bfea5034800a1dedb1b~mv2.jpeg/v1/fill/w_388,h_600,al_c,q_80,enc_avif,quality_auto/file.jpeg"
        tag="Pega Constellation"
        title="Pega Constellation Foundation Batch 3"
        description="Learn modular design, data models, REST, and UI in Pega Constellation."
        date="03rd June to 19th June"
        classes="6 Classes – Tue & Thu (16:30 - 18:30 CET)"
        price="40.00"
        oldPrice="60.00"
      />

     
      <CourseCardProps
        image="https://static.wixstatic.com/media/b42676_fc27da84d9d34af682d099e782dd48e0~mv2.png/v1/fill/w_433,h_503,al_c,q_85,enc_avif,quality_auto/file.png"
        tag="Pega Integration"
        title="Pega Integration Masterclass"
        description="Master REST, SOAP, Kafka, and system integration best practices."
        date="10th July to 25th July"
        classes="6 Classes – Mon & Wed (17:00 - 18:30 CET)"
        price="55.00"
        oldPrice="75.00"
      />
  
       
      <CourseCardProps
        image="https://academy.pega.com/sites/default/files/h5p/content/264901/images/imageAfter-5de6eee3446be.png"
        tag="Case Management"
        title="Advanced Case Management in Pega"
        description="Automate complex workflows and case routing with real-world use cases."
        date="01st Sept to 15th Sept"
        classes="6 Classes – Wed & Fri (17:00 - 18:30 CET)"
        price="50.00"
        oldPrice="70.00"
      /> 
*/}



      {/* Practice 3 – Passing Data as an Object Prop
        // Instead of passing each value (title, image, price, etc.) as separate props,
        // we now pass a single object (course1, course2, course3) as a prop called 'course'.
        // This keeps the code clean and allows us to group related data in one object.
      */}

     {/* 
      <CourseCardObject course={course1} />
      <CourseCardObject course={course2} />
      <CourseCardObject course={course3} />
*/}


      {/* Practice 4 – Learning State with Counter Component */}
      
      {/* <Counter /> */}
      {/* <Stopwatch /> */}
     {/* <BookList  /> */}
      {/* <SmoothScroll /> */}
      {/* <SubscribeButton /> */}
    
       <DarkModeToggle />


    
      
    </div>
  );
}

export default App;
