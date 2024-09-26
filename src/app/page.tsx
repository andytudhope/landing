import Image from "next/image";
import KernelPlant from "../../public/kernel-plant.gif";
import PixelBg from "../../public/pixel.png";
import ArrowRight from "../../public/arrow-right.svg";
import Trees from "../../public/trees.png";
import {fellows as featured, projects} from "../components/Featured";
import type { Fellow, Project } from "../components/Featured";
import { ReactElement } from "react";

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
    <div className="backdrop-blur-[80.20px] py-[24px] px-[40px] flex justify-between border-2">
      <div>
        Logo
      </div>
      <div className="place-self-end">
        Explore All
      </div>
    </div>
  )
}

const Button = ({children, type}: {children: ReactElement, type:"primary" | "secondary"}) => {
  if (type === "primary") {
    return (
      <div className="bg-[#4B5B33] border-2 border-[#4B5B33] text-white px-[12px] py-[6px] rounded-full inline-flex gap-3 w-full sm:w-auto">
                {children}
              </div>
    )
  }

  if (type === "secondary") {
    return (
      <div className="border-2 border-[#4B5B33] px-[12px] py-[6px] rounded-full w-full sm:w-auto">
        {children}
      </div>
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
        <div className="sm:w-96 w-full p-12 sm:p-0">
          <div className="flex flex-col justify-start text-4xl">
            <div>
              Building a better web
            </div>
            <div>
              together, block by block
            </div>
          </div>
          <div className="text-lg">
            Kernel is an open, peer-to-peer, learning environment focused on building a better web.
          </div>
          <div className="flex gap-6 mt-[32px] items-center sm:flex-row flex-col">
            <Button type="primary">
              <>
                Applications Open for KBX <ArrowRightIcon />
              </>
            </Button>
            <Button type="secondary">
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
    <div className="flex flex-col gap-2 h-[221px] w-[112px] ml-3">
      {/* image */}
      <div className="rounded-lg relative h-[112px] w-[112px]">
        {fellow.image}
      </div>
      {/* details */}
      <div className="w-full cursor-pointer grow flex flex-col justify-between">
        <div className="font-bold">
          {fellow.name}
        </div>
        <div className="text-sm">
          {fellow.position}
        </div>
        <div className="inline-flex gap-3">
          <Tag text={fellow.tag1} />
          {fellow.tag2 && <Tag text={fellow.tag2} />}
        </div>
      </div>
    </div>
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
      <div className="sm:text-lg text-xl z-10 mt-14">
        Celebrating 4 years of Kernel Blocks
      </div>
      <div className="sm:text-4xl text-3xl z-10">
        Meet the Kernel Fellows
      </div>
      <div className="w-full h-full grow overflow-hidden mt-6 z-10 mb-14">
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
    <div className="sm:text-6xl text-5xl">
      {big}
    </div>
    <div className="sm:text-xl text-sm">
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
    <div className="h-[320px] w-[320px] border-[1px] border-slate-200 flex flex-col rounded-lg m-3">
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
        </div>
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
      <div className="text-4xl mt-4">
        Featured Projects by Kernel Fellows
      </div>
      <div className="grid grid-rows-1 grid-flow-col absolute bottom-0 my-12 w-full px-3 overflow-x-auto overflow-y-hidden gap-6">
        <Projects />
      </div>
    </div>
  )
}

// kernel syllabus table
const FifthFold = () => {
  return (
    <div className={`h-[500px] w-full bg-red-300 flex flex-col items-center p-3 overflow-hidden`}>
      Explore the Kernel Book
    </div>
  )
}

// footer
const Footer = () => {
  return (
    <div className={`h-[250px] w-full bg-green-300 flex flex-col items-center p-3 overflow-hidden`}>

    </div>
  )
}

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />

      <FirstFold />

      <SecondFold />

      <ThirdFold />

      <FourthFold />

      <FifthFold />

      <Footer />
    </div>
  );
}
