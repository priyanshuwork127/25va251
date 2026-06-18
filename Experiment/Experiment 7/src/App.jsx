
function App(){

  const users=[
    {Name:"Priyanshu",age:19,contact:985434845},
    {Name:"Pratham",age:19,contact:925434845},
    {Name:"Pushpjeet",age:19,contact:915434845}
  ]

  return(
    <>
    <h1>Students profile</h1>
    {users.map((user,index)=>(
      <div key={index}>
        <h3>Name:{user.Name}</h3>
        <p>Age:{user.age}</p>
        <p>Contact:{user.contact}</p>
      </div>
    ))}
    </>
  )

}
export default App;