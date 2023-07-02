const Hello = (props) => {
  console.log(props);

  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
      <p>So you are probably born in {bornYear()}</p>
    </div>
  )
}

function App() {
  const name = "John";
  const age = 22;

  return (
    <div>
       <p>Greetings</p>
       <Hello name={name} age={2 * 10 + 1}/>
       <Hello name="Mary"age={age}/>
    </div>
  );
}

export default App;