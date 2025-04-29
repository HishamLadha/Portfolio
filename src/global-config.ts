// ----------------------------------------------------------------------
import {Experience, Profile, Project} from "@/types";
import {experiences, profile, projects, skills} from "@/data";

export type ConfigValue = {
  profileName: string;
  profileDescription: string;
  profileImage: string;
  about: string;
  icon: string;
  noIndex: boolean;
  websiteUrl: string;
  experience: Experience[]
  profile: Profile
  projects: Project[]
  skills: string[]
  twitter: {
    card: "summary" | "summary_large_image" | "player" | "app";
    creator: string;
  };
  assetsDir: string;
  posthog: { apiKey: string; apiHost: string };
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  profileName: 'Beaudelaire Tsoungui Nzodoumkouo',
  profileDescription: "I am a software engineering student at concordia and i love to build.",
  profileImage: '/beaudelaire.png',
  about: "I mostly do Full-stack development with an eye for good design and pretty good grasp of all parts of the stack including the frontend, backend, databases, devops, and cloud.",
  icon: '/avatar.svg',
  noIndex: false,
  websiteUrl: 'https://www.hishamladha.ccom',
  experience: experiences,
  profile: profile,
  projects: projects,
  skills: skills,
  twitter: {
    card: 'summary_large_image',
    creator: ''
  },
  assetsDir: process.env.NEXT_PUBLIC_ASSETS_DIR ?? "",
  /**
   * Posthog
   */
  posthog: {
    apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "",
    apiHost: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "",
  },
};