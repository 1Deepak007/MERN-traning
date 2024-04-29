/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CYj6c8a7CC7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">John Doe's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Welcome to my Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore a collection of my best work, showcasing my skills and creativity.
                </p>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                height="600"
                src="/placeholder.svg"
                width="1270"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I am a passionate web developer with a keen eye for design. I have experience in a variety of
                  technologies and love to create beautiful and functional websites.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="work">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Portfolio</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore a selection of my best work, showcasing my skills and creativity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white">Project 1</h3>
                  <p className="text-gray-300">A description of the project.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white">Project 2</h3>
                  <p className="text-gray-300">A description of the project.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white">Project 3</h3>
                  <p className="text-gray-300">A description of the project.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  alt="Project 4"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white">Project 4</h3>
                  <p className="text-gray-300">A description of the project.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  alt="Project 5"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white">Project 5</h3>
                  <p className="text-gray-300">A description of the project.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  alt="Project 6"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white">Project 6</h3>
                  <p className="text-gray-300">A description of the project.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Feel free to reach out to me with any questions or opportunities.
                </p>
              </div>
              <form className="mx-auto w-full max-w-md space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="john@example.com" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={4} />
                </div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

