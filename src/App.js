const Hello = (props) => {
  console.log(props);
  const name = props.name;
  const age = props.age;

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>Hello {name}, you are {age} years old.</p>
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