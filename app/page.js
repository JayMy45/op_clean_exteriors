import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">

      {/* Nashville Video */}
      <div class="video-container">
        <video
          id='fullscreenVideo'
          autoPlay
          muted
          className="w-screen h-screen object-cover flex-1"
        >
          <source src="https://res.cloudinary.com/dp04hh5pz/video/upload/v1692109540/OpClean/Vidoes/Nashville.Video_mtqhuc.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed md:hidden bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/FooterLogo.png"
              alt="Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  )
}
