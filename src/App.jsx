import { useState, useEffect } from 'react'

const commands = [
  { text: '$ whoami', delay: 0 },
  { text: 'naveenkumar', delay: 600 },
  { text: '', delay: 900 },
  { text: '$ cat /etc/motd', delay: 1200 },
  { text: '', delay: 1500 },
  { text: '  ███╗   ██╗ █████╗ ██╗   ██╗███████╗███████╗███╗   ██╗', delay: 1600 },
  { text: '  ████╗  ██║██╔══██╗██║   ██║██╔════╝██╔════╝████╗  ██║', delay: 1650 },
  { text: '  ██╔██╗ ██║███████║██║   ██║█████╗  █████╗  ██╔██╗ ██║', delay: 1700 },
  { text: '  ██║╚██╗██║██╔══██║╚██╗ ██╔╝██╔══╝  ██╔══╝  ██║╚██╗██║', delay: 1750 },
  { text: '  ██║ ╚████║██║  ██║ ╚████╔╝ ███████╗███████╗██║ ╚████║', delay: 1800 },
  { text: '  ╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝╚═╝  ╚═══╝', delay: 1850 },
  { text: '', delay: 2100 },
  { text: '$ cat about.txt', delay: 2400 },
  { text: 'Cybersecurity Enthusiast | Building Secure and Innovative Solutions.', delay: 2800 },
  { text: '', delay: 3000 },
  { text: '$ ls ~/links/', delay: 3300 },
]

const links = [
  { label: 'github', href: 'https://github.com/Naveenkumar-Dev-21' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/naveenkumarv-varatharajan' },
  { label: 'email', href: 'mailto:naveenkumar2006.kongu@gmail.com' },
  { label: 'resume', href: '/resume.pdf' },
  { label: 'blog', href: 'https://rangerblogs.hashnode.dev' },
]

function App() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showLinks, setShowLinks] = useState(false)

  useEffect(() => {
    if (visibleLines < commands.length) {
      const nextDelay = (commands[visibleLines]?.delay || 0) - (commands[visibleLines - 1]?.delay || 0)
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1)
      }, visibleLines === 0 ? commands[0].delay : nextDelay)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setShowLinks(true), 400)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="terminal-title">naveenkumar@portfolio:~</span>
      </div>
      <div className="terminal-body">
        {commands.slice(0, visibleLines).map((cmd, i) => (
          <div key={i} className={`line ${cmd.text.startsWith('$') ? 'command' : cmd.text.startsWith('  ') && cmd.text.includes('█') ? 'ascii' : 'output'}`}>
            {cmd.text}
          </div>
        ))}

        {showLinks && (
          <div className="links-section">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'email' ? '_blank' : undefined}
                rel={link.label !== 'email' ? 'noopener noreferrer' : undefined}
                className="link-item"
              >
                <span className="link-arrow">→</span> {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="prompt-line">
          <span className="prompt">naveenkumar@portfolio:~$ </span>
          <span className="cursor">█</span>
        </div>
      </div>
    </div>
  )
}

export default App
