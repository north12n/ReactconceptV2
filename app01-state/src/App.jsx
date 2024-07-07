import React,{useState} from "react";
import Header from './component/Header'
import StudenList from './component/Studentlist'
import AddForm from './component/AddForm'

//----------------------------------------------------------------

function App() {
  let students = [];

  const gen = ["male","female"]

  for (let index = 0; index < 5; index++) {
    const number = Math.floor(Math.random()*2)

    let student = {
      id: index,
      name: "Student" + index,
      gender : gen[number]
    };

    students.push(student);

  }
  const [data, setData] = useState(students);
const addData = (newStudent)=>{
 setData([...data,newStudent])
}
  const deleteData = (id) => {
    setData(data.filter((item) => item.id != id));
  };
  return (
    <div>
      <Header title="Student List" major="Comcience"/>
      <AddForm addData={addData}/>
      <StudenList data={data} deleteData={deleteData} />
    </div>
  );
}
export default App;