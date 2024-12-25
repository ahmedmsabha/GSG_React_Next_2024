import { useState } from 'react'

interface TodoFormProps {
  onSubmit: (text: string) => void
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onSubmit(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Todo here..."
        className="w-full p-2 mb-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
      >
        Add Todo
      </button>
    </form>
  )
}

