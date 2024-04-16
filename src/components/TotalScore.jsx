
const TotalScore = ({score}) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">{score}</h1>
          <p className="text-xl font-semibold">Total Score</p>
        </div>
    </div>
  )
}

export default TotalScore
