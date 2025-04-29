import {Experience, Profile, Project, Recommendation} from "@/types";

export const experiences: Experience[] = [
    {
        role: "Software Developer Intern",
        company: "Royal Bank of Canada (Amplify)",
        logo: "https://cdn.worldvectorlogo.com/logos/rbc-shield.svg",
        duration: "May 2024 - Aug 2024",
        description: "Built a patent-pending LLM simulation & rules engine serving institutional clients for RBC Capital Markets.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7239290677065342976/",
        images: [],
    },
    {
        role: "Software Developer Intern",
        company: "Royal Bank of Canada",
        logo: "https://cdn.worldvectorlogo.com/logos/rbc-shield.svg",
        duration: "Jan 2024 - Apr 2024",
        description: " Developed frontend online banking features for projects including International Money Transfer and Add Bill Payee",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7239290677065342976/",
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
    // {
    //     title: "ConcordiaAI",
    //     description: "A Rag Chatbot that can answer questions related to courses and instructors at Concordia",
    //     tech: ["LibreChat Fork"],
    //     link: "https://chat.concordia.courses",
    //     logo: "https://concordia.courses/apple-touch-icon.png",
    // },
    // {
    //     title: "Flymile",
    //     description: "Flight search engine designed for credit card points enthusiasts",
    //     tech: ["React", "Java"],
    //     link: "https://flymile.pro",
    //     logo: "https://flymile.pro/apple-touch-icon.png",
    // },
    // {
    //     title: "Concordia courses",
    //     description: "A course and instructor review platform for Concordia students like RateMyProfessors, but better",
    //     tech: ["Svelte", "Java", "Python"],
    //     link: "https://concordia.courses",
    //     logo: "https://concordia.courses/apple-touch-icon.png",
    // },
    // {
    //     title: "Visual Schedule Builder Export",
    //     description: "Google Chrome extension to export Concordia's course schedule from Visual Schedule Builder to your google calendar",
    //     tech: ["JavaScript"],
    //     link: "https://chromewebstore.google.com/detail/visual-schedule-builder-e/nbapggbchldhdjckbhdhkhlodokjdoha",
    //     logo: "https://lh3.googleusercontent.com/nG7p7IQV9gKROILl_vws-1iRxyLh2brXR6h-e6ucfQH1KSDKRWZob-zyaDWhUhEmcYl5TcCGWY1r2kH3hShC6R84=s60",
    // },
]


export const skills = ["TS/JS", "Python", "Java", "Go", "NextJS", "MongoDB", "PostgreSQL", "Git", "Docker"]
