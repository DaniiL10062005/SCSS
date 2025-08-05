import '@/styles/page-styles/content.scss'
import { useState } from 'react'

type Props = {
  title: string
  description: string[]
  style?: string
}

export const Block = ({ title, description, style }: Props) => {
  const [isFocus, setFocus] = useState(false)

  return (
    <div
      onClick={() => setFocus((prev) => !prev)}
      className={`content__block ${style}`}
      tabIndex={0}
    >
      <p style={{ opacity: isFocus ? '0.3' : '1' }} className="content__header">
        {title}
      </p>
      {description.map((item) => (
        <p style={{ opacity: isFocus ? '1' : '0' }} className="content__paragraph">
          {item}
        </p>
      ))}
    </div>
  )
}
