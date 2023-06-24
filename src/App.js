const Hello =  (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

function App() {
  return (
    <div>
       <p>Greetings</p>
       <Hello name="Fortune"/>
       <Hello name="Mary"/>
    </div>
  );
}

export default App;
