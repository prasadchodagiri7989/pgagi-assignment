const MovieSkeletonCard = () => {
  return (
    <div className="inline-block min-w-[250px] max-w-xs animate-pulse bg-white rounded-lg shadow-md p-4">
      <div className="w-full h-40 bg-gray-300 rounded mb-4" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-300 rounded w-1/2" />
    </div>
  )
}

export default MovieSkeletonCard
