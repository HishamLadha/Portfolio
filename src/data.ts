import {Experience, Profile, Project, Recommendation} from "@/types";

export const experiences: Experience[] = [
    {
        role: "Software Intern",
        company: "Autodesk",
        logo: "https://static-dc.autodesk.net/etc.clientlibs/v605.20220721.1732/dotcom/clientlibs/clientlib-site/resources/images/favicons/app-icon-192.png",
        duration: "May 2025",
        description:
            "Upcoming internship at Autodesk",
        link: "https://www.autodesk.com",
        images: [],
    },
    {
        role: "Engineering Consultant",
        company: "Points Path",
        logo: "https://pointspath.com/apple-icon.png",
        duration: "Mar 2025 - Present",
        description: "Building new features for https://pointspath.com.",
        link: "https://pointspath.com",
        images: [],
    },
    {
        role: "Co-Founder (Acquired By Point.me)",
        company: "FlyFast",
        logo: "/flyfast.png",
        duration: "Sep 2024 - Feb 2025",
        description:
            "A cash flight search engine like google flights, but better",
        link: "https://flyfast.io",
        images: ["/flyfast-img/home.png", "/flyfast-img/calendar-view.png", "/flyfast-img/flights.png", "/flyfast-img/offers.png", "/flyfast-img/flights-results.png", "/flyfast-img/booking.png", "/flyfast-img/booking-options.png"],
    },
    {
        role: "Teacher Assistant",
        company: "Concordia University",
        logo: "https://concordia.ca/etc/designs/concordia/clientlibs/img/favicons/apple-touch-icon.png",
        duration: "July 2024 - Present",
        description:
            "Teaching assistant for Object-Oriented Programming, Data Structures and Algorithms courses and Web Development courses.",
        link: "https://ta.beaudelaire.ca",
        images: [],
    },
    {
        role: "Software Developer Intern",
        company: "Straumann Group",
        logo: "https://straumann.com/resources/straumann/apple-touch-icon.png",
        duration: "May 2024 - Aug 2024",
        description:
            "Developed and deployed a new design for the visibility toolkit. Implementing undo/redo throughout the design workflow.",
        link: "https://straumann.com",
        images: [],
    },
    {
        role: "Software Developer Intern",
        company: "Straumann Group",
        logo: "https://straumann.com/resources/straumann/apple-touch-icon.png",
        duration: "Sep 2024 - Dec 2024",
        description:
            "Created test case generation tool which creates random XML docs from XML Schema. Implementing tooth tagging from AI tooth segmentation data.",
        link: "https://straumann.com",
        images: [],
    },
]

const socials = [
    {
        name: "Github",
        link: "https://github.com/HishamLadha",
        icon: "github"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/HishamLadha",
        icon: "linkedin"
    },
]

export const profile: Profile = {
    name: "Hisham Ladha",
    title: "",
    about: "",
    contactUrl: "https://cal.com/hisham-ladha",
    socials: socials
}

export const projects: Project[] = [
    {
        title: "Linky",
        description: "Modern Alumni/Current Student Network, with profiles periodically updated from LinkedIn",
        tech: ["TS", "AI"],
        link: "#",
        logo: "/linky.svg",
    },
    {
        title: "ConcordiaAI",
        description: "A Rag Chatbot that can answer questions related to courses and instructors at Concordia",
        tech: ["LibreChat Fork"],
        link: "https://chat.concordia.courses",
        logo: "https://concordia.courses/apple-touch-icon.png",
    },
    {
        title: "Flymile",
        description: "Flight search engine designed for credit card points enthusiasts",
        tech: ["React", "Java"],
        link: "https://flymile.pro",
        logo: "https://flymile.pro/apple-touch-icon.png",
    },
    {
        title: "Concordia courses",
        description: "A course and instructor review platform for Concordia students like RateMyProfessors, but better",
        tech: ["Svelte", "Java", "Python"],
        link: "https://concordia.courses",
        logo: "https://concordia.courses/apple-touch-icon.png",
    },
    {
        title: "Visual Schedule Builder Export",
        description: "Google Chrome extension to export Concordia's course schedule from Visual Schedule Builder to your google calendar",
        tech: ["JavaScript"],
        link: "https://chromewebstore.google.com/detail/visual-schedule-builder-e/nbapggbchldhdjckbhdhkhlodokjdoha",
        logo: "https://lh3.googleusercontent.com/nG7p7IQV9gKROILl_vws-1iRxyLh2brXR6h-e6ucfQH1KSDKRWZob-zyaDWhUhEmcYl5TcCGWY1r2kH3hShC6R84=s60",
    },
]


export const skills = ["TS/JS", "Python", "Java", "Go", "NextJS", "MongoDB", "PostgreSQL", "Git", "Docker"]
