import "./App.css";

// ? creating  component
// ? array destructing
// ? react fragment
// ? javascript in react

function NewComponent({ name, price = 24, classNameAssign }) {
  return (
    <div className={classNameAssign}>
      {/* <p>{props.name}</p>
      <p>{props.price}</p> */}
      <p>{name}</p>
      <p>{price}</p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <>
      <NewComponent name={"random"} price={20} classNameAssign={"div"} />
      <NewComponent name={"random1"} classNameAssign={"div1"} />
      <NewComponent name={"random2"} price={25} classNameAssign={"div2"} />
    </>
  );
}

export default App;
