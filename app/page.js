import Image from "next/image";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r ">
  <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-radial from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      
      <code className="font-mono font-bold">Latani Tharmakulasingam</code>
    </p>
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="mailto:latani2709@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact Me
      </a>
    </div>
  </div>

  

  <div className="mb-32 grid text-center lg:max-w-5xl w-full lg:mb-0 lg:grid-rows-4 lg:text-left">
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className="mb-3 text-2xl font-semibold">
        About Me
      </h2>
      <p className="m-0  text-sm opacity-50">
        BSc Engineering-  University of Moratuwa.
      </p>
    </div>

    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className="mb-3 text-2xl font-semibold">
        High lights in my Pet projects
      </h2>
      <ul className="m-0 text-sm opacity-50">
        <li>API Integration: Integrated APIs for functionalities like ChatGPT OpenAI API for natural language processing capabilities and data exchange.</li>
        <li>Lazy Loading: Optimized web applications for faster load times.</li>
        <li>Redux State Management: Implemented state management using Redux for handling global states.</li>
        <li>Backend Development: Built Backend APIs and connected with Database using Entity Framework, utilized Identity Server for Role-Based Authorization.</li>
        <li>RSVP Implementations: Managed event responses and email notifications using SendGrid.</li>
        <li>Responsive Web Pages: Designed web pages responsive for various screen sizes.</li>
      </ul>
    </div>

    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className="mb-3 text-2xl font-semibold">
        Contact Me
      </h2>
      <p className="m-0  text-sm opacity-50">
        Feel free to reach out via email: <a href="mailto:latani2709@gmail.com">latani2709@gmail.com</a>
      </p>
    </div>
  </div>
</main>

  );
}
