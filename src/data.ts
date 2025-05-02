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
        description: " Developed frontend online banking features for projects including International Money Transfer and Add Bill Payee.",
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
    {
        name: "Calendar",
        link: "https://cal.com/hisham-ladha",
        icon: "calendar"
    }
]

export const profile: Profile = {
    name: "Hisham Ladha",
    title: "",
    about: "Computer Science at Concordia University",
    contactUrl: "https://cal.com/hisham-ladha",
    socials: socials
}

export const projects: Project[] = [
    {
        title: "Scoper.fyi",
        description: "A simplified version of levels.fyi for Canadian internships.",
        tech: ["TypeScript", "Next.js", "Python"],
        link: "https://scoper.fyi",
        logo: "/linky.svg",
    },
    {
        title: "Low level PCAP Parser",
        description: "Developed a Python script for raw PCAP analysis, extracting metrics and identifying scanning patterns.",
        tech: ["Python"],
        link: "#",
        logo: "/linky.svg",
    },
    {
        title: "Phoenix",
        description: "Automated penetration testing tool that scans a network, performs enumeration and simultaneously runs exploits.",
        tech: ["React.js", "Python", "Nmap", "Metasploit"],
        link: "https://devpost.com/software/phoenix-ub8lzo",
        logo: "/linky.svg",
    },
]


export const skills = ["TS/JS", "Python", "Java", "Next.js", "Angular.js", "MongoDB", "SQL", "Git", "Docker"]
