// tag2 is optional
import self from "@/utils/self";
import Image from "next/image";
import { ReactElement } from "react";

const baseUrl = self

const getImage = (name: string, ext:string, dir: "fellows" | "projects" = "fellows") => {
  return (
    <Image src={`${baseUrl}/${dir}/${name}.${ext}`} alt="fellow image" objectFit="cover" objectPosition="top" fill></Image>
  )
}

export type Fellow = {
  name: string,
  position: string,
  tag1: string,
  tag2: string | undefined | null,
  image: ReactElement,
  url: string | undefined | null
}

export type Project = {
  name: string,
  fellowName: string,
  fellowImage: ReactElement,
  projectImage: ReactElement,
  description: string,
  tag1: string,
  tag2: string | undefined | null,
  url: string
}

export const projects: Array<Project> = [
  {
    name: 'Toucan Protocol',
    fellowName: 'Rachel Black',
    description: 'carbon points',
    tag1: 'climate',
    tag2: 'refi',
    url: 'https://google.com',
    projectImage: getImage("toucan", "png", "projects"),
    fellowImage: getImage("alanah-lam", "png", "fellows")
  },
  {
    name: "Impact Protocol",
    fellowName: "Sidcode",
    description: "impact protocol",
    tag1: "impact",
    tag2: "climate",
    url: "https://google.com",
    projectImage: getImage("impact", "png", "projects"),
    fellowImage: getImage('patrick-cruz', 'png', "fellows")
  },
  {
    name: "Impact Protocol",
    fellowName: "Sidcode",
    description: "impact protocol",
    tag1: "impact",
    tag2: "climate",
    url: "https://google.com",
    projectImage: getImage("impact", "png", "projects"),
    fellowImage: getImage('patrick-cruz', 'png', "fellows")
  },
  {
    name: "Impact Protocol",
    fellowName: "Sidcode",
    description: "impact protocol",
    tag1: "impact",
    tag2: "climate",
    url: "https://google.com",
    projectImage: getImage("impact", "png", "projects"),
    fellowImage: getImage('patrick-cruz', 'png', "fellows")
  },
]

export const fellows: Array<Fellow> = [
  {
    name: "Alex Smith",
    position: "co-founder",
    tag1: "builder",
    tag2: "creative",
    image: getImage('alex-smith', 'png'),
    url: "https://google.com"
  },
  {
    name: "Ella Watts",
    position: "co-founder, ABC",
    tag1: "builder",
    tag2: "protocols",
    image: getImage('ella-watts', 'png'),
    url: "https://google.com"
  },
  {
    name: "Alanah Lam",
    position: "Designer @ Future Primitive",
    tag1: "creativity",
    tag2: "design",
    image: getImage('alanah-lam', 'png'),
    url: "https://google.com"
  },
  {
    name: "Patrick Cruz",
    position: "Founder, Deepwork Studio",
    tag1: "gaming",
    tag2: "wellness",
    image: getImage('patrick-cruz', 'png'),
    url: "https://google.com"
  },
  {
    name: "Mitch Albom",
    position: "Designer",
    tag1: "design",
    tag2: "ux",
    image: getImage('mitch', 'png'),
    url: "https://google.com"
  },
  {
    name: "Benny Giang",
    position: "Co-Founder, Future Primitive",
    tag1: "builder",
    tag2: "NFTs",
    image: getImage('benny-giang', 'png'),
    url: "https://google.com"
  },
  {
    name: "Lesly",
    position: "Tinkerer",
    tag1: "climate",
    tag2: null,
    image: getImage('lesly', 'png'),
    url: "https://google.com"
  },
  {
    name: "Alex Smith",
    position: "co-founder",
    tag1: "builder",
    tag2: "creative",
    image: getImage('alex-smith', 'png'),
    url: "https://google.com"
  },
  {
    name: "Ella Watts",
    position: "co-founder, ABC",
    tag1: "builder",
    tag2: "protocols",
    image: getImage('ella-watts', 'png'),
    url: "https://google.com"
  },
  {
    name: "Alanah Lam",
    position: "Designer @ Future Primitive",
    tag1: "creativity",
    tag2: "design",
    image: getImage('alanah-lam', 'png'),
    url: "https://google.com"
  },
  {
    name: "Patrick Cruz",
    position: "Founder, Deepwork Studio",
    tag1: "gaming",
    tag2: "wellness",
    image: getImage('patrick-cruz', 'png'),
    url: "https://google.com"
  },
  {
    name: "Mitch Albom",
    position: "Designer",
    tag1: "design",
    tag2: "ux",
    image: getImage('mitch', 'png'),
    url: "https://google.com"
  },
  {
    name: "Benny Giang",
    position: "Co-Founder, Future Primitive",
    tag1: "builder",
    tag2: "NFTs",
    image: getImage('benny-giang', 'png'),
    url: "https://google.com"
  },
  {
    name: "Lesly",
    position: "Tinkerer",
    tag1: "climate",
    tag2: null,
    image: getImage('lesly', 'png'),
    url: "https://google.com"
  },
  {
    name: "Alex Smith",
    position: "co-founder",
    tag1: "builder",
    tag2: "creative",
    image: getImage('alex-smith', 'png'),
    url: "https://google.com"
  },
  {
    name: "Ella Watts",
    position: "co-founder, ABC",
    tag1: "builder",
    tag2: "protocols",
    image: getImage('ella-watts', 'png'),
    url: "https://google.com"
  },
  {
    name: "Alanah Lam",
    position: "Designer @ Future Primitive",
    tag1: "creativity",
    tag2: "design",
    image: getImage('alanah-lam', 'png'),
    url: "https://google.com"
  },
  {
    name: "Patrick Cruz",
    position: "Founder, Deepwork Studio",
    tag1: "gaming",
    tag2: "wellness",
    image: getImage('patrick-cruz', 'png'),
    url: "https://google.com"
  },
  {
    name: "Mitch Albom",
    position: "Designer",
    tag1: "design",
    tag2: "ux",
    image: getImage('mitch', 'png'),
    url: "https://google.com"
  },
  {
    name: "Benny Giang",
    position: "Co-Founder, Future Primitive",
    tag1: "builder",
    tag2: "NFTs",
    image: getImage('benny-giang', 'png'),
    url: "https://google.com"
  },
  {
    name: "Lesly",
    position: "Tinkerer",
    tag1: "climate",
    tag2: null,
    image: getImage('lesly', 'png'),
    url: "https://google.com"
  },
]
