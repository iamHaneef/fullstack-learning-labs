import Students from "./3 - Props/Students"
function App() {
  return (
    <>
      <Students name="Haneef" age={10} no={123} check={true} />
      <Students name="Aile" age={20} no={456} check={false} />
      <Students name="Deny" age={30} no={984} check={true}/>
      <Students name="Dead"  age ={1000}/>
    </>
  )
}
export default App
