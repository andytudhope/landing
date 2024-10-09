import Image from "next/image";
import KernelPlant from "../../public/kernel-plant.gif";
import PixelBg from "../../public/pixel.png";
import ArrowRight from "../../public/arrow-right.svg";
import Trees from "../../public/trees.png";
import LogoImage from "../../public/logo.png";
import {fellows as featured, projects} from "../components/Featured";
import type { Fellow, Project } from "../components/Featured";
import { ReactElement } from "react";
import { Miriam_Libre } from 'next/font/google'

const miriam = Miriam_Libre({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
})


const KernelPlantComponent = () => {
  return (
    <Image
      src={KernelPlant}
      alt="Kernel plant"
      objectFit="cover"
      height={'1300'}
      width={'1200'}
    />
  )
}

const Logo = () => {
  return (
    <Image
      src={LogoImage}
      alt="Kernel Logo"
      objectFit="cover"
      height={'1300'}
      width={'1200'}
    />
  )
}

const PixelBgComponent = () => {
  return (
    <Image
      src={PixelBg}
      alt="pixel background"
      objectFit="cover"
      height={'1300'}
      width={'1200'}
    />
  )
}

const ArrowRightIcon = () => {
  return (
    <div className="relative w-6 h-6">
      <Image
      src={ArrowRight}
      alt="right arrow"
      objectFit="cover"
      fill
    />
    </div>
  )
}

const Navbar = () => {
  return (
    <div className="backdrop-blur-[80.20px] py-[12px] px-[24px] flex justify-between border-2">
      <div className="sm:w-9 w-6">
        <Logo />
      </div>
      <div className="place-self-end">
      <a href={"https://www.kernel.community/en/learn/module-0/trust"} className={`group inline-flex flex-col font-medium sm:text-lg text-base`} target="_blank">
        <span className="inline-flex flex-row">
          Explore All
        </span>
        <div className="bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
      </a>
      </div>
    </div>
  )
}

const Button = ({children, type, href}: {children: ReactElement, type:"primary" | "secondary", href: string}) => {
  if (type === "primary") {
    return (
      <a className="bg-[#4B5B33] border-2 border-[#4B5B33] text-white px-[8px] py-[6px] rounded-full inline-flex gap-3 w-full sm:w-auto cursor-pointer hover:bg-opacity-90 transition-all ease-in delay-100" href={href} target="_blank">
                {children}
              </a>
    )
  }

  if (type === "secondary") {
    return (
      <a className="border-2 border-[#4B5B33] px-[8px] py-[6px] rounded-full w-full sm:w-auto cursor-pointer hover:bg-[#4B5B33]/30 transition-all ease-in delay-100" href={href} target="_blank">
        {children}
      </a>
    )
  }

  return <></>

}

// hero section
const FirstFold = () => {
  return (
    <div className={`grid sm:grid-cols-2 sm:h-[500px]`}>
      <div className="sm:hidden block">
        <KernelPlantComponent />
      </div>
      <div className="flex items-center sm:pl-16">
        <div className="sm:w-[40rem] w-full p-12 sm:p-0">
          <div className={`flex flex-col justify-start text-5xl ${miriam.className} `}>
            <div>
              Building a better web
            </div>
            <div>
              together, block by block
            </div>
          </div>
          <div className="text-lg mt-6">
            Kernel is an open, peer-to-peer, learning environment focused on building a better web.
          </div>
          <div className="flex gap-6 mt-[32px] items-center sm:flex-row flex-col">
            <Button type="primary" href="https://apply.kernel.community">
              <>
                Apply to KBX now <ArrowRightIcon />
              </>
            </Button>
            <Button type="secondary" href="https://www.kernel.community/en/start/">
              <>
                Explore All
              </>
            </Button>
          </div>
        </div>
      </div>
      <div className="h-full relative overflow-hidden hidden sm:block">
        <div className="absolute -bottom-12 -right-48">
          <KernelPlantComponent />
        </div>
        <div className="absolute -bottom-10 -right-48 -z-10">
          <PixelBgComponent />
        </div>
      </div>
    </div>
  )
}

const Tag = ({text}: {text: string}) => {
  return (
    <div className="inline-flex gap-3">
    <div className="border-[1px] border-slate-400 rounded-lg text-xs p-[2px]">
      <span className="opacity-40 mr-[2px]">
        #
      </span>
      {text}
    </div>
  </div>
  )
}

const Fellow = ({fellow}: {fellow: Fellow }) => {
  return (
    <a className="flex flex-col gap-2 h-[221px] w-[112px] ml-3" href={fellow.url ?? ""} target="_blank">
      {/* image */}
      <div className="rounded-lg relative h-[112px] w-[112px]">
        {fellow.image}
      </div>
      {/* details */}
      <div className="w-full cursor-pointer flex flex-col justify-between">
        <div className="font-bold">
          {fellow.name}
        </div>
        <div className="text-sm">
          {fellow.position}
        </div>
        <div className="inline-flex gap-3">
          {/* <Tag text={fellow.tag1} />
          {fellow.tag2 && <Tag text={fellow.tag2} />} */}
        </div>
      </div>
    </a>
  )
}


const Fellows = () => {
  return (
    <>
      {
        featured.map((fellow, key) => {
          return (
            <Fellow fellow={fellow} key={key}/>
          )
        })
      }
    </>
  )
}


// fellows
const SecondFold = () => {
  return (
    <div className={`h-[780px] w-full flex flex-col items-center p-3 relative bg-[#F9F9F9] overflow-clip`}>
      <div className="sm:text-lg text-xl z-10 mt-14 font-semibold text-legacyPurple">
        Celebrating 4 Years of Kernel Blocks
      </div>
      <div className={`sm:text-4xl text-3xl z-10 ${miriam.className}`}>
        Meet the Kernel Fellows
      </div>
      <div className="w-full h-full grow overflow-hidden mt-12 z-10 mb-14">
        <div className="gap-16 grid grid-rows-2 grid-flow-col w-full h-full overflow-x-auto overflow-y-hidden">
          {/* fellow component */}
          <Fellows />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 overflow-clip">
        <Image src={Trees} objectFit="cover" height={1100} width={1100} alt="trees background" />
      </div>
    </div>
  )
}

const StatItem = ({big, description} :{big: string, description: string}) => {
  return (
  <div className="flex flex-col items-center justify-center hover:bg-[#F9F9F9] p-6 sm:p-0">
    <div className="sm:text-6xl text-5xl font-medium">
      {big}
    </div>
    <div className={`sm:text-xl text-sm ${miriam.className}`}>
      {description}
    </div>
  </div>
  )
}

// stats
const ThirdFold = () => {
  return (
    <div className={`sm:h-[250px] w-full overflow-hidden grid sm:grid-rows-1 grid-rows-2 grid-flow-col divide-x divide-y sm:divide-y-0 sm:border-t-2 sm:border-b-2`}>
      <StatItem big="2057" description="Kernel Fellows" />
      <StatItem big="92" description="countries" />
      <StatItem big="150+" description="Active Projects" />
      <StatItem big="$40M+" description="Raised by Kernel Fellows" />
    </div>
  )
}

const Project = ({project}: {project: Project}) => {
  return (
    <a className="h-[320px] w-[320px] border-[1px] border-slate-200 flex flex-col rounded-lg m-3 cursor-pointer" href={project.url} target="_blank">
          <div className="relative min-h-[40%]">
            {project.projectImage}
            <div className="absolute -bottom-4 right-4 bg-neutral-900 rounded-full w-12 h-12">
              <div className="relative h-full w-full rounded-full overflow-clip">
              {project.fellowImage}
              </div>
            </div>
          </div>
          <div className="flex flex-col min-h-[60%] overflow-auto justify-between p-2">
            <div className="flex flex-col">
            <div className="text-xl font-bold">{project.name}</div>
            <div className="font-bold">by {project.fellowName}</div>
            </div>
            <div>
              {project.description}
            </div>
            <div className="flex gap-3">
              <Tag text={project.tag1} />
              {project.tag2 && <Tag text={project.tag2} />}
            </div>
          </div>
        </a>
  )
}

const Projects = () => {
  return (
    <>
      {
        projects.map((proj, key) => {
          return (
            <Project project={proj} key={key}/>
          )
        })
      }
    </>
  )
}

// projects
const FourthFold = () => {
  return (
    <div className={`h-[500px] w-full bg-[#F9F9F9] flex flex-col items-center p-3 overflow-hidden relative my-12`}>
      <div className={`sm:text-4xl text-3xl z-10 ${miriam.className}`}>
        Featured Projects by Kernel Fellows
      </div>
      <div className="grid grid-rows-1 grid-flow-col absolute bottom-0 my-12 w-full px-3 overflow-x-auto overflow-y-hidden gap-6">
        <Projects />
      </div>
    </div>
  )
}

const TableCell = ({ text, href, highlight }: { text: string, href: string, highlight?: boolean }) => {
  return (
    <td className={`cursor-pointer hover:text-legacyPurple/90 max-w-min`}>
        <a href={href} className={`group inline-flex flex-col ${highlight ? 'text-legacyPurple/90' : ''}`} target="_blank">
        <span className="inline-flex flex-row">
          {text}
        </span>
        <div className="bg-legacyPurple/50 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
      </a>
    </td>
  )
}

// kernel syllabus table
const FifthFold = () => {
  return (
    <div className={`sm:h-[890px] w-full flex flex-col items-center p-3`}>
      <div className="sm:text-4xl text-3xl font-medium">
        Explore the Kernel Book
      </div>
      <div className="sm:text-xl sm:w-[990px] text-base w-full text-center mb-12 mt-6">
        Kernel topics are open source and open access. Explore the content and apply to be in the next Kernel block to learn alongside like-minded individuals creating change in web3 and beyond.
      </div>
      <div className="w-full sm:w-[60%] h-full overflow-auto">
        <table className="border-gray-200/50 text-left sm:divide-y rounded-md border-separate border-2 shadow-xl mx-auto">
          <thead className="[&>*]:[&>*]:px-6 [&>*]:[&>*]:py-4 font-black sm:text-lg text-base">
            <tr>
              <th>Title</th>
              <th>Personal Inquiry</th>
              <th>Web3 Inquiry</th>
            </tr>
          </thead>
          <tbody className={`divide-y [&>*]:[&>*]:px-6 [&>*]:[&>*]:py-4 ${miriam.className} sm:text-lg text-base`}>
            <tr>
              <TableCell text="Introduction to Kernel" href="https://www.kernel.community/en/learn/module-0" highlight />
              <TableCell text="Play of Pattern" href="https://www.kernel.community/en/learn/module-0/play-of-pattern" />
              <TableCell text="Trust" href="https://www.kernel.community/en/learn/module-0/trust" />
            </tr>
            <tr>
              <TableCell text="Ethereum’s History and State" href="https://www.kernel.community/en/learn/module-0" highlight />
              <TableCell text="Meaning" href="https://www.kernel.community/en/learn/module-0" />
              <TableCell text="Value" href="https://www.kernel.community/en/learn/module-0" />
            </tr>
            <tr>
              <TableCell text="A Global Financial System" href="https://www.kernel.community/en/learn/module-0" highlight />
              <TableCell text="Better Questions" href="https://www.kernel.community/en/learn/module-0" />
              <TableCell text="Money and Speech" href="https://www.kernel.community/en/learn/module-0" />
            </tr>
            <tr>
              <TableCell text="Take Back the Web" href="https://www.kernel.community/en/learn/module-0" highlight />
              <TableCell text="Intention" href="https://www.kernel.community/en/learn/module-0" />
              <TableCell text="Freedom" href="https://www.kernel.community/en/learn/module-0" />
            </tr>
            <tr>
              <TableCell text="Internet Age Institutions" href="https://www.kernel.community/en/learn/module-0" highlight />
              <TableCell text="Govern Yourself" href="https://www.kernel.community/en/learn/module-0" />
              <TableCell text="Liberally Radical" href="https://www.kernel.community/en/learn/module-0" />
            </tr>
            <tr>
              <TableCell text="Tokens and Mechanism Design" href="https://www.kernel.community/en/learn/module-0" highlight />
              <TableCell text="Listening and Stories" href="https://www.kernel.community/en/learn/module-0" />
              <TableCell text="Incentives" href="https://www.kernel.community/en/learn/module-0" />
            </tr>
            <tr>
              <TableCell text="Scaling Principled Games" href="https://www.kernel.community/en/learn/module-0" highlight />
              <TableCell text="Learn How To Learn" href="https://www.kernel.community/en/learn/module-0" />
              <TableCell text="Censorship Resistance" href="https://www.kernel.community/en/learn/module-0" />
            </tr>
            <tr>
              <TableCell text="The Gift" href="https://www.kernel.community/en/learn/module-0" highlight />
              <TableCell text="Giving" href="https://www.kernel.community/en/learn/module-0" />
              <TableCell text="Scale-ability" href="https://www.kernel.community/en/learn/module-0" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

// footer
const Footer = () => {
  return (
    <div className={`h-[250px] w-full flex flex-col items-center p-3 overflow-hidden pt-12`}>
      <a className="bg-[#4B5B33] border-2 border-[#4B5B33] text-white px-[22px] py-[6px] rounded-full inline-flex w-full sm:w-auto cursor-pointer hover:bg-opacity-90 transition-all ease-in delay-100 text-2xl items-center gap-4" href={'https://kernel.community/en/start'} target="_blank">
          About Kernel <ArrowRightIcon />
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />

      <FirstFold />

      <ThirdFold />

      <SecondFold />

      <FourthFold />

      <FifthFold />

      <Footer />
    </div>
  );
}
