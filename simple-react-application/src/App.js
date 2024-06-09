function App() {

  function Header() {
    return (<h1>Simple React Application</h1>)
  }

  function Content (props) {
    return (<p style={{color: props.color}}>{props.text}</p>)
  }

  function Footer(props) {
    return (<h1 style={{color: props.color}}>{props.text}</h1>);
  }


  return (
    <>
      <Header/>
      <Content color="blue" text="This is my first React Application" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer color="brown" text="Created by Me, of course."/>
    </>
  );
}

export default App;