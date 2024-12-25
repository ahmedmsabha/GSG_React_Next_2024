interface TodoDataProps {
  created: number
  completed: number
}

export default function TodoData({ created, completed }: TodoDataProps) {
  return (
    <div className="flex justify-between mb-6 px-4 py-3 bg-gray-50 rounded-md">
      <div className="text-center">
        <div className="text-xl font-semibold text-gray-700">{created}</div>
        <div className="text-sm text-gray-500">Created tasks</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-semibold text-gray-700">{completed}</div>
        <div className="text-sm text-gray-500">Completed tasks</div>
      </div>
    </div>
  )
}

