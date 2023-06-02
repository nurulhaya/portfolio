import Head from 'next/head'
import Link from 'next/link'
import { ProjectCard } from '../../components/ProjectCard'
import { Inter } from 'next/font/google'

import {
  Container,
  Center,
  AppShell,
  Navbar,
  Header,
  Button,
  Group,
  Text
} from "@mantine/core";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Nurul Haya</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell 
        padding="md"
        // header={
        //   <Header height={60} p="xs">
        //     <Group position="center">
        //       <Link href="/"><Button variant="subtle">Home</Button></Link>
        //       {/* <Link href="/projects"><Button variant="subtle">Projects</Button></Link> */}
        //       {/* <Link href="/resume"><Button variant="subtle">Resume</Button></Link> */}
        //       <Link href="mailto:nhaya@terpmail.umd.edu"><Button variant="subtle">Contact</Button></Link>

        //     </Group>

        //   </Header>
        //   }
      >
      <Container size="fluid" className='greeting'>
        <Center><h1>Hi, I'm Nurul! :)</h1></Center>
        <Center className='tagline'><p>I&lsquo;m an aspiring frontend developer/UX researcher based in Washington, DC. <br/>Here is some of my work:</p></Center>
        </Container>
        <Container size="fluid" className='content'>
          <ProjectCard
          tags="Postgres / Google Cloud / Express"
          image="https://github.com/nurulhaya/weedwarriors/raw/main/client/images/screenshot01.png" 
          title="Weed Warriors" description="Web application for collaborative mapping of local invasive plant species." link="https://github.com/nurulhaya/weedwarriors"
          ></ProjectCard>

          
<ProjectCard
          tags="MySQL / Express"
          image="https://i.imgur.com/u1vlCsy.png"
          title="Subscription Surfer" 
          description="Web application that displays available movies across streaming platforms." 
          link="https://subscription-surfer.herokuapp.com"
          ></ProjectCard>

<ProjectCard
          tags="Figma"
          image="https://i.imgur.com/953pLK3.png" 
          title="Makeathon 2023: HealthAI" description="Low-fidelity mockup for an AI-based application promoting health
          literacy."
          link="https://docs.google.com/presentation/d/1qUWz_iaR_krhVGVEgTSYXGuo33AhatLXbb5YHUo5avQ/edit?usp=sharing"></ProjectCard>

{/* <ProjectCard
          tags="Postgres / Google Cloud /  Express"
          image="https://github.com/nurulhaya/weedwarriors/raw/main/client/images/screenshot01.png" 
          title="Weed Warriors" description="Frontend for a reporting system where users collaboratively map instances of local invasive plant species." link="https://github.com/nurulhaya/weedwarriors"
          ></ProjectCard> */}


          </Container>

      </AppShell>
    </>
  )
}
