const Buttons = (props) => {

  return (
    <>
      {props.data.map((linkItem) => (
          <a href={linkItem.url} key={linkItem.name}>
            <button>
              {linkItem.name}
            </button>
          </a>
      ))}
    </>
  )
}

export default Buttons
