import Image from "next/image";
import Navbar from './navbar.js';
export default function Home() {
  return (

<main className="flex min-h-screen flex-col items-center justify-between px-24">
  <Navbar/>
  <div className="mb-32 grid text-center lg:max-w-5xl w-full lg:mb-0 lg:grid-rows-4 lg:text-left">
    <div className="section ">
      <h2 className="mb-5 text-2xl font-semibold">
      Hello! I'm Tharmakulasingam Latani,
      </h2>
      <p className="m-0  text-lg opacity-50">
      A  developer primarily working in the frontend with the React framework . Currently, I design and develop various pet projects to satisfy my enthusiasm for creating websites. I am mainly focused on increasing user engagement by implementing frontend techniques.
      </p>
    </div>

    <div className="section ">
      <h2 className="mb-3 text-2xl font-semibold">
        Techniques you need to know as a beginner developer 
      </h2>
      <div className="gallery">
  <div className="gallery-item">
    <img src="path/to/api-integration.png" alt="API Integration Icon" className="icon" />
    <p className="description">API Integration</p>
  </div>
  <div className="gallery-item">
    <img src="path/to/lazy-loading.png" alt="Lazy Loading Icon" className="icon" />
    <p className="description">Lazy Loading</p>
  </div>
  <div className="gallery-item">
    <img src="path/to/redux-state-management.png" alt="Redux State Management Icon" className="icon" />
    <p className="description">Redux State Management</p>
  </div>
  <div className="gallery-item">
    <img src="path/to/rsvp-implementations.png" alt="RSVP Implementations Icon" className="icon" />
    <p className="description">RSVP Implementations</p>
  </div>
  <div className="gallery-item">
    <img src="path/to/responsive-web-pages.png" alt="Responsive Web Pages Icon" className="icon" />
    <p className="description">Responsive Web Pages</p>
  </div>
</div>

    </div>

    <div className="section ">
      <h2 className="mb-3 text-2xl font-semibold">
        Contact Me
      </h2>
      <p className="m-0  text-sm opacity-50">
        Linkedin : <a href="linkedin.com/in/t-latani" target="_blank"> linked in profile</a>
      </p>
      <p className="m-0  text-sm opacity-50">
        Github : <a href="linkedin.com/in/t-latani" target="_blank"> my project repos on github </a>
      </p>
    </div>
  </div>
</main>

  );
}
