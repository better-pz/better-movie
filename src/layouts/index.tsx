
function BasicLayout(props: any) {
  return (
    <>
      <div className="container">
        {props.children}
      </div>
    </>
  )
}

export default BasicLayout
