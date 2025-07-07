export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I’m about building real, lasting connections with the people I work with.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/profile.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on a startup called KORA",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "KORA - AI Family Assistant",
    des: "What inspired me was the idea of being ahead of the curve—to be among the first to build something that I strongly believe is inevitable: a true AI family assistant.",
    img: "/kora-img.png",
    iconLists: ["/re.svg"],
    link: "https://meetkora.online/",
  },
  {
    id: 2,
    title: "FineTech Agency Website",
    des: "Designed and developed a modern, responsive website for Finetech Agency — a forward-thinking digital agency — enhancing their brand identity, improving user experience, and significantly increasing lead generation through optimized design and performance.",
    img: "/finetech.png",
    iconLists: ["/re.svg"],
    link: "https://www.finetech.tech/",
  },
  {
    id: 3,
    title: "Teljoy Payment Gateway",
    des: "Contributed to the development of a secure and scalable payment gateway system for Teljoy, enhancing online transaction capabilities.",
    img: "/img7.png",
    iconLists: ["/re.svg"],
    link: "https://teljoy.co.za",
  },
  {
    id: 4,
    title: "Legala IT Solutions Website",
    des: "Designed and built a sleek, responsive corporate website for a digital agency, boosting their online presence and lead generation.",
    img: "/img8.png",
    iconLists: ["/re.svg"],
    link: "https://legalaitsolutions.co.za/",
  },
  {
    id: 5,
    title: "E-Ticketing & License Scanning App",
    des: "Developed a smart e-ticketing application that scans license disks and automatically retrieves vehicle details to issue tickets.",
    img: "img9.png",
    iconLists: ["/re.svg"],
    link: "/",
  },
  {
    id: 6,
    title: "Ganyu - Personal Finance App",
    des: "Built a money management application that helps users track expenses, set budgets, and visualize their financial health.",
    img: "/im10.png",
    iconLists: ["/re.svg"],
    link: "/",
  },
  // {
  //   id: 5,
  //   title: "ClassicCV - Resume Builder",
  //   des: "Created a user-friendly app that lets users build professional CVs quickly using customizable templates and export options.",
  //   img: "/classiccv.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/html.svg", "/pdf.svg"],
  //   link: "https://classiccv.io",
  // },
];

export const testimonials = [
  {
    quote:
      "Launching my beauty store online felt overwhelming, but Kapinga Ntita made it seamless. The website looks stunning, and my sales have skyrocketed! I couldn't be happier with the results.",
    name: "Lebo Khumalo",
    title: "Founder & CEO",
  },
  {
    quote:
      "I needed a fresh, modern website for my clinic, and Ntita delivered beyond expectations. Now, patients can easily book appointments online, and our engagement has doubled! Thanks for the great work, Ntita!",
    name: "Dr. Lawrence Mbobo",
    title: "Founder & CEO",
  },
  {
    quote:
      "As a creative professional, I wanted a portfolio that truly represented my work. Ntita built a sleek, eye-catching site that helped me land new clients almost immediately! I highly recommend his services.",
    name: "Richard Botha",
    title: "Artist",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full stack developer - Sinappsus",
    desc: "Built and maintained web applications using Laravel and Django, bringing front-end interfaces to life with Vue.js. Customized WordPress sites and used various third-party tools to create smooth, user-friendly experiences. Skills Utilized: PHP , Laravel, Vue, Django, MySql, Azure DevOps, Tailwind, WordPress Elementor.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer - CirculatelT",
    desc: "Enhancing and maintaining web applications using Next.js, managing state with Redux, and integrating Firebase. Focused on adding new features, fixing bugs, and mentoring junior developers along the way. Skills Utilized: NextJS, Redux, Tailwind, Firebase",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Developer - TechGenius",
    desc: "Contributed to multiple projects by developing new features, resolving bugs, and ensuring smooth functionality. Collaborated with cross-functional teams and mentored junior developers to drive project success and maintain high-quality standards. Skills Utilizing: ReactJS, NodeJS, Express, Wordpress, Javascript, Tailwind, MongoDB, CouchDB",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance Software Developer",
    desc: "Successfully delivered a variety of client projects, handling full-stack development, feature enhancements, and bug fixes to ensure optimal performance and user experience. Worked independently and in collaboration with client-side teams to gather requirements, design solutions, and implement scalable applications. Skills Utilized: ReactJS, NodeJS, Express, Wordpress, Javascript, Tailwind, MongoDB, CouchDB",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/nganduntita1",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/ntita11/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kapinga-ntita-a6b50b1b2/",
  },
];
