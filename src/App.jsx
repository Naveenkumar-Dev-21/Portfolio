import { useState, useEffect, useRef } from 'react'

/* ── DarkOS ASCII art ── */
const asciiArt = [
  '                              ⢠⠢⠀                ',
  '                            ⢀⣶⠋⡆⢹               ',
  '                  ⢀⡆⢀⣤⢛⠛⣠⣿⠀⡏               ',
  '                ⢀⣶⣿⠟⣡⠊⣠⣾⣿⠃⣠               ',
  '              ⣴⣯⣿⠀⠊⣤⣿⣿⣿⠃⣴⣧⣄⣀            ',
  '          ⢀⣤⣶⣿⣿⡟⣠⣶⣿⣿⣿⢋⣤⠿⠛⠉⢁⣭⣽⠋        ',
  '        ⣠⠖⡭⢉⣿⣯⣿⣯⣿⣿⣿⣟⣧⠛⢉⣤⣶⣾⣿⣿⠋         ',
  '      ⣴⣫⠓⢱⣯⣿⢿⠋⠛⢛⠟⠯⠶⢟⣿⣯⣿⣿⣿⣿⣿⣿⣦⣄      ',
  '    ⢀⡮⢁⣴⣿⣿⣿⠖⣠⠐⠉⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠛⠛⠛⢿⣶⣄    ',
  '  ⢀⣤⣷⣿⣿⠿⢛⣭⠒⠉⠀⠀⣀⣀⣄⣤⣤⣴⣶⣶⣶⣿⣿⣿⣿⣿⠿⠋⠁     ',
  '⢀⣶⠏⠟⠝⠉⢀⣤⣿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣧      ',
  '⢴⣯⣤⣶⣿⣿⣿⣿⣿⡿⣿⣯⠉⠉⠉⠉⠀⠈⣿⡀⣟⣿⣿⢿⣿⣿⣿⣿⣿⣦     ',
  '   ⠉⠛⣿⣧⠀⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠃⣿⣿⣯⣿⣦⡀⠉⠻⣿⣦     ',
  '      ⠉⢿⣮⣦⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠀⣯⠉⠉⠛⢿⣿⣷⣄⠈⢻⣆   ',
  '         ⠉⠢⠀⠀⠀⠀⠀⠀⢀⢡⠃⣾⣿⣿⣦⠀⠀⠙⢿⣿⣤⠙⣄  ',
  '              ⠀⠀⠀⠀⢀⢋⡟⢠⣿⣿⣿⠋⢿⣄⠀⠈⡄⠙⣶⣈⡄ ',
  '              ⠀⠀⠐⠚⢲⣿⠀⣾⣿⣿⠁⠀⠉⢷⡀⠀⣇⠀⠈⠻⡀ ',
  '              ⠀⢢⣀⣿⡏⠀⣿⡿⠀⠀⠀⠀⠀⠙⣦⠀⢧       ',
  '               ⠀⢸⠿⣧⣾⣿⠀⠀⠀⠀⠀⠀⠀⠙⣮       ',
  '                 ⠀⠉⠙⠛                   ',
]

/* ── Hacker-style system info ── */
const sysInfo = [
  { label: null, value: 'root@darkos', class: 'nf-header' },
  { label: null, value: '─────────────────────', class: 'nf-separator' },
  { label: 'ALIAS', value: 'naveenkumar' },
  { label: 'OS', value: 'DarkOS x86_64' },
  { label: 'KERNEL', value: '6.12.7-arch1-1' },
  { label: 'SHELL', value: 'zsh 5.9' },
  { label: 'UPTIME', value: '∞' },
  { label: 'ROLE', value: 'Cybersecurity Enthusiast' },
  { label: 'PACKAGES', value: '1337 (pacman)' },
  { label: 'RESOLUTION', value: '1920x1080' },
  { label: 'TERMINAL', value: 'kitty' },
  { label: null, value: '', class: 'nf-separator' },
  { label: null, value: '─────────────────────', class: 'nf-separator' },
  { label: 'CPU', value: 'AMD Ryzen 9 7950X' },
  { label: 'MEMORY', value: '32GB DDR5' },
  { label: 'GPU', value: 'RTX 4090' },
  { label: null, value: '', class: 'nf-separator' },
  { label: null, value: '─────────────────────', class: 'nf-separator' },
  { label: 'STATUS', value: '[ ACTIVE ]' },
  { label: null, value: '████████████████████░', class: 'nf-bar' },
]

/* ── Matrix rain characters ── */
const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF'

/* ── Boot/hack sequence ── */
const hackSequence = [
  { text: '[*] Initializing secure connection...', delay: 0, class: 'hack-info' },
  { text: '[*] Routing through TOR network...', delay: 400, class: 'hack-info' },
  { text: '[+] Node 1: 192.168.1.██  ── CONNECTED', delay: 800, class: 'hack-success' },
  { text: '[+] Node 2: 10.0.██.███  ── CONNECTED', delay: 1100, class: 'hack-success' },
  { text: '[+] Node 3: 172.██.█.██  ── CONNECTED', delay: 1400, class: 'hack-success' },
  { text: '[*] Encrypting channel... AES-256-GCM', delay: 1700, class: 'hack-info' },
  { text: '[+] Secure tunnel established.', delay: 2100, class: 'hack-success' },
  { text: '', delay: 2300 },
  { text: '>>> ACCESS GRANTED <<<', delay: 2500, class: 'hack-granted' },
  { text: '', delay: 2800 },
  { text: `Last login: Thu Feb 27 08:46:00 from ██.██.██.██`, delay: 3000, class: 'hack-dim' },
  { text: '', delay: 3200 },
]

const terminalCommands = [
  { text: '┌──(root㉿darkos)-[~]', delay: 0, class: 'prompt-top' },
  { text: '└─$ cat /etc/profile', delay: 200, class: 'command' },
  { text: '__SYSINFO__', delay: 700 },
  { text: '', delay: 900 },
  { text: '┌──(root㉿darkos)-[~]', delay: 1100, class: 'prompt-top' },
  { text: '└─$ ls -la ~/targets/', delay: 1300, class: 'command' },
]

const links = [
  { label: 'github', href: 'https://github.com/Naveenkumar-Dev-21', perm: 'drwxr-xr-x' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/naveenkumarv-varatharajan', perm: 'drwxr-xr-x' },
  { label: 'email', href: 'mailto:naveenkumar2006.kongu@gmail.com', perm: '-rw-r--r--' },
  { label: 'resume', href: '/resume.pdf', perm: '-rw-r--r--' },
  { label: 'blog', href: 'https://ranger.hashnode.dev', perm: 'drwxr-xr-x' },
]

/* ── Matrix Rain Background ── */
function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#0f0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.globalAlpha = Math.random() * 0.5 + 0.1
        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-rain" />
}

/* ── System Info Block ── */
function SysInfoBlock() {
  const maxLines = Math.max(asciiArt.length, sysInfo.length)

  return (
    <div className="sysinfo-block">
      {Array.from({ length: maxLines }).map((_, i) => (
        <div key={i} className="sysinfo-row">
          <span className="sysinfo-ascii">{asciiArt[i] || ''}</span>
          <span className="sysinfo-info-line">
            {sysInfo[i] ? (
              sysInfo[i].class === 'nf-header' ? (
                <span className="nf-header">{sysInfo[i].value}</span>
              ) : sysInfo[i].class === 'nf-separator' ? (
                <span className="nf-separator">{sysInfo[i].value}</span>
              ) : (
                <>
                  <span className="nf-label">{sysInfo[i].label}</span>
                  <span className="nf-value">{sysInfo[i].value}</span>
                </>
              )
            ) : null}
          </span>
        </div>
      ))}
    </div>
  )
}

/* ── Glitch Text ── */
function GlitchText({ text, className }) {
  return (
    <span className={`glitch ${className || ''}`} data-text={text}>
      {text}
    </span>
  )
}

/* ── Main App ── */
function App() {
  const [hackIndex, setHackIndex] = useState(0)
  const [cmdIndex, setCmdIndex] = useState(0)
  const [phase, setPhase] = useState('hack')
  const [showLinks, setShowLinks] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [hackIndex, cmdIndex, showLinks, phase])

  // Hack boot sequence
  useEffect(() => {
    if (phase !== 'hack') return
    if (hackIndex < hackSequence.length) {
      const currentDelay = hackSequence[hackIndex].delay
      const prevDelay = hackIndex > 0 ? hackSequence[hackIndex - 1].delay : 0
      const timer = setTimeout(() => setHackIndex(v => v + 1), hackIndex === 0 ? 300 : currentDelay - prevDelay)
      return () => clearTimeout(timer)
    } else {
      setPhase('terminal')
    }
  }, [hackIndex, phase])

  // Terminal commands
  useEffect(() => {
    if (phase !== 'terminal') return
    if (cmdIndex < terminalCommands.length) {
      const currentDelay = terminalCommands[cmdIndex].delay
      const prevDelay = cmdIndex > 0 ? terminalCommands[cmdIndex - 1].delay : 0
      const timer = setTimeout(() => setCmdIndex(v => v + 1), cmdIndex === 0 ? 300 : currentDelay - prevDelay)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setShowLinks(true), 400)
      return () => clearTimeout(timer)
    }
  }, [cmdIndex, phase])

  return (
    <>
      <MatrixRain />
      <div className="scanline-overlay" />
      <div className="terminal">
        <div className="terminal-bar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">
            root@darkos:~ — <span className="title-encrypted">[ENCRYPTED]</span>
          </span>
        </div>
        <div className="terminal-body" ref={bodyRef}>
          {/* Hack sequence */}
          {hackSequence.slice(0, hackIndex).map((line, i) => (
            <div key={`hack-${i}`} className={`line ${line.class || 'hack-dim'}`}>
              {line.class === 'hack-granted' ? (
                <GlitchText text={line.text} className="granted-text" />
              ) : line.text}
            </div>
          ))}

          {/* Terminal commands */}
          {phase === 'terminal' && terminalCommands.slice(0, cmdIndex).map((cmd, i) => {
            if (cmd.text === '__SYSINFO__') {
              return <SysInfoBlock key={`cmd-${i}`} />
            }
            return (
              <div key={`cmd-${i}`} className={`line ${cmd.class || 'output'}`}>
                {cmd.text}
              </div>
            )
          })}

          {/* Links as ls -la output */}
          {showLinks && (
            <div className="links-section">
              <div className="line hack-dim">total {links.length}</div>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'email' ? '_blank' : undefined}
                  rel={link.label !== 'email' ? 'noopener noreferrer' : undefined}
                  className="link-item"
                >
                  <span className="link-perm">{link.perm}</span>
                  <span className="link-user">root root</span>
                  <span className="link-name">{link.label}</span>
                </a>
              ))}
            </div>
          )}

          {/* Prompt */}
          <div className="prompt-block">
            <div className="line prompt-top">┌──(root㉿darkos)-[~]</div>
            <div className="prompt-line">
              <span className="prompt-text">└─$ </span>
              <span className="cursor">█</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
