
const RoleDice = ({ roleDice, randomNum }) => {

  return (
    <>
      <div className="">
        <div className="w-full cursor-pointer" onClick={roleDice} >
          <img src={`/images/dice_${randomNum}.png`} alt="dice_image" />
        </div>
      </div>
    </>
  )
}

export default RoleDice
