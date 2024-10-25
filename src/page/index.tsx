// import React, { useEffect, useState } from "react";
// import { Todo, useTodoStore } from "../store/todo/store";
// import SwitchComponent from "../component/switch/switch";
// import SelectedOption from "../component/select/select"; // Impor SelectedOption

// function Process() {
//   const { todos, getTodos, errorMessage } = useTodoStore();
//   const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // State untuk opsi terpilih

//   useEffect(() => {
//     const fetchData = async () => {
//       await getTodos();
//     };

//     fetchData();
//   }, [getTodos]);

//   const handleUnchecked = (data: Todo) => {
//     console.log(data);

//     if (data.completed === false) {
//       console.log("checked");
//     }

//     if (data.completed === true) {
//       console.log("unchecked");
//     }
//   };

//   // Opsi untuk komponen SelectedOption
//   const options = todos.map(todo => ({
//     label: todo.title, // Label yang ditampilkan
//     value: todo.id.toString(), // Value yang digunakan
//   }));

//   return (
//     <div>
//       <SelectedOption
//         options={options} // Menggunakan opsi dari todos
//         defaultValue={selectedOptions} // Nilai default untuk Select
//         onChange={setSelectedOptions} // Memperbarui state ketika opsi berubah
//       />
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <li>
//             <span className="text-red-500">ID:</span> {todo.id}
//             <h1 className="text-red-500 text-justify">{todo.title}</h1>
//           </li>
//           {/* <SwitchComponent
//             checked={todo.completed}
//             onChange={() => handleUnchecked(todo)}
//           /> */}
//           <SwitchComponent/>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Process;

// import React, { useEffect, useState } from "react";
// import { Todo, useTodoStore } from "../store/todo/store";
// import SwitchComponent from "../component/switch/switch";
// import SelectedOption from "../component/select/select"; 

// function Process() {
//   const { getTodos } = useTodoStore();
//   const [selectedOptions1, setSelectedOptions1] = useState<string[]>([]); // State untuk opsi terpilih pertama
//   const [selectedOptions2, setSelectedOptions2] = useState<string[]>([]); // State untuk opsi terpilih kedua

//   useEffect(() => {
//     const fetchData = async () => {
//       await getTodos();
//     };

//     fetchData();
//   }, [getTodos]);

//   return (
//     <div>
//       {/* Switch Section */}
//       <div style={{ marginBottom: "10px" }}>
//         <span style={{ fontFamily: "Plus Jakarta Sans", fontSize: "16px", color: "#1B78FC", marginRight: "10px" }}>
//           Switch:
//         </span>
//         <SwitchComponent />
//       </div>

//       {/* Segment Section */}
//       <div style={{ marginBottom: "10px" }}>
//         <span style={{ fontFamily: "Plus Jakarta Sans", fontSize: "16px", color: "#1B78FC", marginRight: "10px" }}>
//           Segment:
//         </span>
//         <SelectedOption
//           options={[]} 
//           defaultValue={selectedOptions1}
//           onChange={setSelectedOptions1}
//         />
//         <SelectedOption
//           options={[]} 
//           onChange={setSelectedOptions2}
//         />
//       </div>
//     </div>
//   );
// }

// export default Process;

import React, { useEffect, useState } from "react";
import { Todo, useTodoStore } from "../store/todo/store";
import SwitchComponent from "../component/switch/switch";
import SelectedOption from "../component/select/select"; 

function Home() {
  const { getTodos } = useTodoStore();
  const [selectedOptions1, setSelectedOptions1] = useState<string[]>([]); // State untuk opsi terpilih pertama
  const [selectedOptions2, setSelectedOptions2] = useState<string[]>([]); // State untuk opsi terpilih kedua

  useEffect(() => {
    const fetchData = async () => {
      await getTodos();
    };

    fetchData();
  }, [getTodos]);

  return (
    <div>
      {/* Switch Section */}
      <div style={{ marginBottom: "10px" }}>
        <span style={{ fontFamily: "Plus Jakarta Sans", fontSize: "16px", color: "#1B78FC", marginRight: "10px" }}>
          Switch:
        </span>
        <SwitchComponent />
      </div>

      {/* Segment Section */}
      <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
        <span style={{ fontFamily: "Plus Jakarta Sans", fontSize: "16px", color: "#1B78FC", marginRight: "10px" }}>
          Segment:
        </span>
        <div style={{ display: "inline-flex", gap: "70px"}}>
          <SelectedOption
            options={[]} 
            defaultValue={selectedOptions1}
            onChange={setSelectedOptions1}
          />
          <SelectedOption
            options={[]} 
            onChange={setSelectedOptions2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;