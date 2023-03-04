// import "./App.css";
// import "./Component/Header.css";
// import Top from "./Component/Header";
// import { Header1, Header2 } from "./Component/Header";
import Form from "./Component/Form";

// ? creating  component
// ? array destructing
// ? react fragment
// ? javascript in react

// function NewComponent({ name, price = 24, classNameAssign }) {
//   return (
//     <div className={classNameAssign}>
//       {/* <p>{props.name}</p>
//       <p>{props.price}</p> */}
//       <p>{name}</p>
//       <p>{price}</p>
//       <hr />
//     </div>
//   );
// }

function App() {
  return (
    <>
      <Form />
      {/* <Top />
      <Header1 />
      <Header2 /> */}
      {/* <NewComponent name={"random"} price={20} classNameAssign={"div"} />
      <NewComponent name={"random1"} classNameAssign={"div1"} />
      <NewComponent name={"random2"} price={25} classNameAssign={"div2"} /> */}
    </>
  );
}

export default App;

// ? learning
// ? import , export , multiple import &  export
// ? different way to style the import Form from './Component/Form';
