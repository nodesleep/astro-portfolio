export default function AboutMe() {
  const d = new Date().getFullYear();
  return (
    <div>
      <div className="about-me">
        <p>
          <strong>Two slashes signify a comment.</strong>
        </p>
        <p>
          I'm Aron and this is my personal space to be me and to share my
          interests in technology.
        </p>
        <p>
          My work has ranged from software engineering, to fullstack, to design.
          I've worked as a consultant, contractor, and freelancer in all of
          these areas of expertise under my own company; building complex and
          robust web applications using JavaScript Frameworks. Did I use enough
          buzzwords there?
        </p>
        <p>
          For the last year and a half, I've been focused on my education and
          learning new languages; taking special interest in Golang for backend
          programming and HTMX. Paired together, they do an extremely wonderful
          job of eliminating the bloat that SPAs carry with them when used for
          the wrong application.
        </p>
        <p>
          This website exists solely for my own purposes; giving me a platform
          to freely test new technologies and designs.
        </p>
        <p>I use Neovim, btw.</p>
        <p>&copy; {d}</p>
      </div>
    </div>
  );
}
