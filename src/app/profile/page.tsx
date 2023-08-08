// here we define the porfile where we can see the my information projects and other else
export default function MyProfile() {
    return (
        <div className="bg-slate-800 min-h-screen">
            
            <header className="py-8 bg-gray-900">
        <div className="container mx-auto justify-items-center items-center">
            <h1 className="text-white text-center font-semibold p-2 font-sans tracking-widest text-3xl">Rishabh Yadav</h1>
            
            <h1 className="text-slate-400 text-center font-semibold  font-sans  text-lg">Full Stack Developer</h1>
        </div>
    </header>

    <section className="py-12">
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* <!-- Project Cards --> */}
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Tech-Lib Manager - CLI Library Management Software </h3>
                    <p className="text-gray-300">Innovative CLI software for efficient library book management, tracking issuance history, and monitoring availability.Eliminates paper-based processes, streamlining operations for optimal efficiency</p>
                    <p className="text-gray-400"> Tools & technologies used: Java, JDBC, MySQL, and VsCode</p>
                    <a href="#" className="mt-4 text-blue-400 hover:underline">View Project</a>
                    
                    <a href="#" className="mt-4 text-blue-400 hover:underline">View Code</a>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">

                    <h3 className="text-xl font-semibold mb-2">RJIT Community - Full-Stack Website</h3>
                    <p className="text-gray-300">Vibrant RJIT Community - Full-stack website for tech enthusiasts. Collaborate, share knowledge, write blogs</p>
                    <p className="text-gray-300"> Built dynamic full-stack website for tech enthusiasts to collaborate, share knowledge, and write tech blogs.Empowering
                    community growth with innovative solutions.
                    </p>
                    <p className="text-gray-400"> Tools & technologies used: Nodejs,Expressjs,Ejs,Mongodb,Mongoose.</p>
                    <a href="#" className="mt-4 text-blue-400 hover:underline">View Project</a>
                    
                    <a href="#" className="mt-4 text-blue-400 hover:underline">View Code</a>
                </div>

                
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">

                    <h3 className="text-xl font-semibold mb-2">TaskManager App</h3>
                    <p className="text-gray-200">Streamline task tracking, boost productivity.</p>
                    <p className="text-gray-300"> TaskManager App achieved its primary goal of simplifying task management for users, providing them with a
robust and efficient tool to stay organized and focused on their goals
                    </p>
                    <p className="text-gray-400">  Tools & technologies used: EJS, Express, Node.js, CSS, and MongoDB</p>
                    <a href="#" className="mt-4 text-blue-400 hover:underline">View Project</a>
                    
                    <a href="#" className="mt-4 text-blue-400 hover:underline">View Code</a>
                </div>
                
                {/* <!-- Add more project cards here --> */}
            </div>
        </div>
    </section>


<section className="py-12">
    <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <ul className="list-disc list-inside">
            <li>Languages:Java, C++, Javascript, SQL, HTML, CSS,Nodejs.</li>
            <li>Developer Tools: Postman, VsCode, Jira, Intellij Idea.</li>
            <li>Frameworks and libraries: Bootstrap, Expressjs, Reactjs, Nextjs, TailwindCSS</li>
            <li>Cloud/Databases: MySql, GCP , Mongodb, Mongdb Atlas</li>
            <li>Coursework: OOPs,DBMS,Operating System, and Computer Network</li>
            <li>Areas of Interest:Web 3.0, BlockChain, Devops.</li>
            {/* <!-- Add more skills here --> */}
        </ul>
    </div>
</section>



<section className="py-12 bg-gray-900">
    <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-white">Work Experience</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="mb-4 md:mb-0 md:mr-6">
                    <h2 className="text-xl font-semibold mb-2">Quality Assurance Analyst Intern </h2>
                    <p className="text-gray-300">Solytics Partners</p>
                    <p className="text-gray-300">Dates: May 2023 - current</p>
                </div>
                <div className="md:flex-1">
                    <p className="text-gray-300">
                    Conducted manual testing, identifying and documenting software defects to improve product quality.
                    </p >
                    <p className="text-gray-300">Assisted in creating test plans and cases, ensuring comprehensive test coverage.</p>
                    <p className="text-gray-300">Tracked and managed software defects, collaborating with developers for timely resolutions.</p>
                </div>
            </div>
        </div>
    </div>
</section>




<section className="py-12">
    <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md m-4">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-300">Rustam Ji Institute of Technology, Tekanpur BSF Academy</p>
            <p className="text-gray-300">CGPA : 8.7</p>
            <p className="text-gray-300">Graduated in May 2024</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md m-4">
            <h3 className="text-xl font-semibold mb-2">Higher Secondary School - PCM</h3>
            <p className="text-gray-300">Bapu Boys Higher Secondary School,Antri Gwalior</p>
            <p className="text-gray-300">Percentage: 92</p>
            <p className="text-gray-300">Passed in 2020</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md m-4">
            <h3 className="text-xl font-semibold mb-2">High School</h3>
            <p className="text-gray-300">Shubhash high School, Aamroul</p>
            <p className="text-gray-300">Percentage: 91.2</p>
            <p className="text-gray-300">Passed in 2018</p>
        </div>
    </div>
</section>

<section className="py-12 bg-gray-900">
    <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">rishabhy461@gmail.com</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-300"><a href="https://www.linkedin.com/in/rishabhlnprofile" target="_blank" className="text-blue-400 hover:underline">linkedin.com/in/rishabhlnprofile</a></p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-300"><a href="https://github.com/ris441" target="_blank" className="text-blue-400 hover:underline">github.com/ris441</a></p>
            </div>
        </div>
    </div>
</section>


<section className="py-12">
    <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Download Resume</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-gray-300 pb-10">Click the button below to download my resume:</p>
            <a href="path-to-your-resume.pdf" download className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Download Resume
            </a>
        </div>
    </div>
</section>




    <footer className="py-6 bg-gray-900">
        <div className="container mx-auto text-center">
            <p>&copy; 2023 Rishabh Yadav. All rights reserved.</p>
        </div>
    </footer>

        </div>
    );
}