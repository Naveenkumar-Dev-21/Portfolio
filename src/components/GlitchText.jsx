export default function GlitchText({ text, as: Tag = 'span', className = '' }) {
  return (
    <Tag className={`glitch-text ${className}`.trim()} data-text={text}>
      {text}
    </Tag>
  )
}
