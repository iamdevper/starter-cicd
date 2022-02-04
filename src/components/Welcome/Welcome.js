import "./Welcome.css";

function Welcome(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <>
      <h1>Hello, {props.name}</h1>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
export default Welcome;
