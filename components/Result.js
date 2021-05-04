import Thumbnail from "./Thumbnail"

function Result({ results }) {
  return (
    <div>
      {results?.map(result => (
        <Thumbnail key={results.id} result={result} />
      ))}
    </div>
  )
}

export default Result
