import { type PageProps } from "$fresh/server.ts";
import AppBar from "../islands/AppBar.tsx";
import { Icon } from "@iconify-icon/react";

function MetaTags(
  { credentials, url }: { credentials: { name: string }; url: string },
) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>
        {credentials.name}{" "}
        - AI Developer | Machine Learning, Computer Vision, NLP
      </title>
      <meta
        name="title"
        content={`${credentials.name} - AI Developer | Machine Learning, Computer Vision, NLP`}
      />
      <meta
        name="description"
        content={"Explore ${credentials.name}'s portfolio showcasing innovative AI projects. Specializing in machine learning, computer vision, and NLP using Python. Discover how I can bring your AI vision to life."}
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}`} />
      <meta
        property="og:title"
        content={`${credentials.name} - AI Developer | Machine Learning, Computer Vision, NLP`}
      />
      <meta
        property="og:description"
        content={`Explore ${credentials.name}'s portfolio showcasing innovative AI projects. Specializing in machine learning, computer vision, and NLP using Python. Discover how I can bring your AI vision to life.`}
      />
      <meta
        property="og:image"
        content={`${url}meta-image.webp`}
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${url}`} />
      <meta
        property="twitter:title"
        content={`${credentials.name} - AI Developer | Machine Learning, Computer Vision, NLP`}
      />
      <meta
        property="twitter:description"
        content={`Explore ${credentials.name}'s portfolio showcasing innovative AI projects. Specializing in machine learning, computer vision, and NLP using Python. Discover how I can bring your AI vision to life.`}
      />
      <meta
        property="twitter:image"
        content={`${url}meta-image.webp`}
      />
      {/* Meta Tags Generated with https://metatags.io */}
    </>
  );
}

export default function App({ Component }: PageProps) {
  const socials = [
    {
      name: "e-mail",
      url: "mailto: pbozuric@outlook.com",
      icon: "ic:baseline-email",
    },
    
    {
      name: "GitHub",
      url: "https://github.com/p3bozuric",
      icon: "fa-brands:github",
    },

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pbozuric/",
      icon: "fa-brands:linkedin",
    },
    
  ];

  const credentials = {
    name: "Patrik Bozuric",
  };

  const url = "https://opensource-portfolio.deno.dev/";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <MetaTags credentials={credentials} url={url} />
        <title>{credentials.name} | AI Dev</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="min-h-screen flex flex-col max-w-screen-xl mx-auto">
        <header>
          <AppBar />
        </header>
        <main>
          <Component />
        </main>
        <footer class="mt-auto footer w-auto m-2 p-4 bg-neutral text-neutral-content rounded-lg">
          <aside>
            <span>MIT licensed with ❤️ by Michael</span>
            <span>
              3D Art by{" "}
              <a
                class="underline"
                href="https://sketchfab.com/KJLOYH"
                target="_blank"
              >
                Valery Kharitonov
              </a>
            </span>
          </aside>
          <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            {socials.map((social) => (
              <a
                href={social.url}
                target="_blank"
                aria-label={social.name}
              >
                <Icon icon={social.icon} width="24" height="24" />
              </a>
            ))}
          </nav>
        </footer>
      </body>
    </html>
  );
}
