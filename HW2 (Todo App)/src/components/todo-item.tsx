interface TodoItemProps {
  text: string
  completed: boolean
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-md mb-2 group">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggle}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
            ${completed 
              ? 'border-green-500 bg-green-500' 
              : 'border-gray-300'
            }`}
        >
          {completed && (
            <div className="w-3 h-3 bg-white rounded-full" />
          )}
        </button>
        <span className={`${completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600 transition-opacity"
      >
        ×
      </button>
    </div>
  )
}

