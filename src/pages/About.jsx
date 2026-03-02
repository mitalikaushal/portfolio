import bioImage from '../assets/img/image2.jpg'

function About() {
  const yearsLapsed = new Date().getFullYear() - 2016;
  
  return (
    <main id="about">
      <h1 className="lg-heading">
        About <span className="text-secondary">Me</span>
      </h1>
      <div className="about-info">
        <img src={bioImage} alt="mitali kaushal" className="bio-image" />
        <div className="bio">
          <h2 className="text-secondary">BIO</h2>
          <p>
            Hi! I'm Mitali. I'm a developer with a serious love for coding and learning. Over the past {yearsLapsed} years, I've had the opportunity
            to work for various companies as a Web Developer/Front-End Developer. My expertise are HTML, CSS, SASS, JavaScript, ES6,
            ReactJS/Redux, Angular2/4, Typescript. As a self taught developer, I've experienced firsthand the professional and personal
            growth that comes with learning how to code.My Current Project is with Children's Hospital Los Angeles, as a Sr. Web Developer.
          </p>
        </div>

        <div className="job job-1">
          <h3>Children's Hospital Los Angeles, CA</h3>
          <h6>Software Engineer III</h6>
          <p>
            <ul>
              <li>Developed user interface by using the React JS, Flux for SPA development. </li>
              <li>Developed the application for responsive to different screen resolutions using Bootstrap, CSS media queries.</li>
              <li>Used React-Router to turn application into Single Page Application.</li>
              <li>Developed Date Time Picker using React JS.</li>
              <li>Worked in using React JS components, Forms, Events, Keys, Router, Animations and Flux concept.</li>
              <li>Implemented Authentication and Authorization using OKTA. </li>
              <li>Worked on responsive design and developed a single ISOMORPHIC responsive website that could be served to desktop, Tablets and mobile users using React.js. </li>
              <li>Implemented the Drag and Drop functionality using React-Draggable.</li>
              <li>Maintained states in the stores and dispatched the actions using Redux.</li>
              <li>In Phase Two, worked closely with the Back-End team to display data using the Custom Components, library Components, and Redux.</li>
              <li>Created and used Reducers that received said Actions to modify the Store State Tree.</li>
              <li>Worked with backend engineers to optimize existing API calls to create efficiencies by deprecating unneeded API calls.</li>
              <li>Used Object Oriented Programming concepts to develop UI components that could be reused across the Web Application.</li>
              <li>Used Jest with Enzyme for writing test cases.</li>
              <li>Defined new Validations through Angular JS for the form validation implemented through HTML5.</li>
              <li>Component for UX-Library consisted of Button, Checkbox, Input, Icons, Toggle Button, Dropdown, Multi-Level Dropdown and many more.</li>
              <li>n Phase Two, worked closely with the Back-End team to display data using the Custom Components, library Components, and Redux.</li>
              <li>Involved in writing application level code to interact with APIs, Web Services using fetch, JSON.</li>
              <li>Worked with backend engineers to optimize existing API calls to create efficiencies by deprecating unneeded API calls.</li>
              <li>Using Azure ADAL for live data transferring. </li>
              <li>Using Azure Active Directory for cloud services.</li>
              <li>Called the Restful web services calls for POST, PUT, DELETE and GET methods.</li>
              <li>Developed Login and Logout functionality in Azure Active Directory.</li>
              <li>Migration to OKTA Cloud Service.</li>
              <li>Monitoring the offshore work and providing technical help to the offshore team for their JIRA tickets.</li>
              <li>Using JIRA for Sprint Planning and Task Management.</li>
              <li>Developed GUI using JavaScript, HTML, DOM, XHTML, CSS, BOOTSTRAP in ongoing projects.</li>
              <li>Extensively used Git for version controlling and regularly pushed the code to GitHub</li>
              <li>Interacted with Testing Team, Scrum Masters and Business Analysts for fixing of Issues.</li>
            </ul>
          </p>
        </div>

        <div className="job job-2">
          <h3>Wells Fargo, San Francisco, CA</h3>
          <h6>React Developer/Front-End Developer</h6>
          <p>
            <ul>
              <li>Worked on cross-functionally to ensure proper functionality and delivery.</li>
              <li>Involved in various phases of Software Development Life Cycle (SDLC) as requirement gathering, data modeling, analysis, architecture design &amp; development for the project.</li>
              <li>Design, develop and test HTML5, CSS3, Bootstrap, JavaScript, ES6, jQuery and Angular JS that meets accessibility and web browser standards for website.</li>
              <li>Used HTML5 elements like video, audio and canvas in making the website interactive.</li>
              <li>Implemented JavaScript source code and embedded nested handling logic using jQuery event handlers and Functional Programming such as Call back functions, Closures, First Class functions, Arrow Functions.</li>
              <li>Involved in framework discussions to select the best suitable JavaScript framework (AngularJS 4). </li>
              <li>Worked on responsive design and developed a single ISOMORPHIC responsive website that could be served to desktop, Tablets and mobile users using React.js.</li>
              <li>Implemented the Drag and Drop functionality using React-Draggable. </li>
              <li>Component for UX-Library consisted of Button, Checkbox, Input, Icons, Toggle Button, Dropdown, Multi-Level Dropdown and many more.</li>
              <li>In Phase Two, worked closely with the Back-End team to display data using the Custom Components, library Components, and Redux.</li>
              <li>Used Middleware, Redux-Promise in application to retrieve data from Back-End and to also perform RESTFUL services.</li>
              <li>Worked with backend engineers to optimize existing API calls to create efficiencies by deprecating unneeded API calls.</li>
              <li>Called the Restful web services calls for POST, PUT, DELETE and GET methods.</li>
              <li>Developed reusable UI components using React JS.</li>
              <li>Extensively used Git for version controlling and regularly pushed the code to GitHub.</li>
            </ul>
          </p>
        </div>

        <div className="job job-3">
          <h3>BusyNerds, Los Angeles, CA</h3>
          <h6>UI Developer</h6>
          <p>
            <ul>
              <li>Worked closely with back-end developers to find ways to push the limits of existing Web technology in service of creating the best possible user experience.</li>
              <li>Made enhancement to existing CSS and DIV tags, made upgrades using Bootstrap model and tested AJAX calls using REST clients.</li>
              <li>Used routing schemes to develop single page applications (SPAs) using AngularJS route.</li>
              <li>Used Marionette to compose rice layouts, show sorted lists. Used CSS basics, CSS3 media queries, CSS3 pseudo classes.</li>
              <li>Developed HTML templates with help of handlebars. Implemented Model View Controller(MVC) Design Pattern using AngularJS 2.</li>
              <li>Created Angular directives, controller, modules, Pipes etc. in TypeScript.</li>
              <li>Experience on Angular JS 2.0 complete lifecycle hook interface inventory.</li>
              <li>Parsed JSON data for backend solutions.</li>
              <li>Performed audits on front-end pull requests and add bug fixes to features on large-scale using AngularJS, JavaScript, CSS/LESS, HTML.</li>
              <li>In Phase One, worked closely with the UX Team to create a Custom Components Library using ReactJS.</li>
              <li>Used React-Router to turn application into Single Page Application.</li>
              <li>Component for UX-Library consisted of Button, Checkbox, Input, Icons, Toggle Button, Dropdown, Multi-Level Dropdown and many more.</li>
              <li>In Phase Two worked closely with the Back-End team to display data using the Custom Components and Redux.</li>
              <li>Created Core Module with components that will be loaded once in AppModule such as Navbar, Toolbar, Services, Routing Module, Models.</li>
              <li>Research, establish, document and maintain company coding best practices, development organization and workflow standards.</li>
              <li>Involved in entire lifecycle of the project including Design, Development, and Deployment, Testing and Implementation and support.</li>
            </ul>
          </p>
        </div>

        <div className="job job-4">
          <h3>VServ, Chandighar, India</h3>
          <h6>Front End Developer</h6>
          <p>
            <ul>
              <li>Developed the various screens and its architecture in accordance to UI Specs.</li>
              <li>Wrote extensive HTML5, CSS3, JavaScript, AngularJS code to build dynamic pages.</li>
              <li>Developed a fully functional login page for the company's user facing website with complete UI and validations.</li>
              <li>Developed using AngularJS practices and commonly used modules based on extensive work experience.</li>
              <li>Used the Model View controller (MVC) framework to build modular and maintainable applications.</li>
              <li>Written AJAX driven JSON consuming JavaScript functions to save User selections such as radio button, drop-down menu selections into a cookie.</li>
              <li>Used Jenkins to deploy Django application and run unit tests.</li>
              <li>Experience on working with CSS Background, CSS Layouts, CSS positioning, CSS text, CSS border, CSS margin, CSS padding, CSS table, Pseudo classes, Pseudo elements and CSS behaviors in CSS.</li>
              <li>Used Junit to unit test the code and fixing the bugs from there on.</li>
              <li>Coded JavaScript for page functionality and Pop Up Screens.</li>
              <li>Maintained continuous communications between team members to track and roll the critical mission driven development. </li>
              <li>Used AJAX and JSON to make asynchronous calls to the project server to fetch data on fly.</li>
              <li>Working with full control of HTML, CSS, Bootstrap, maintaining code and cleanliness.</li>
              <li>Developed Web pages in Responsive Design using various libraries and adapt to the changing environment.</li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  )
}

export default About
