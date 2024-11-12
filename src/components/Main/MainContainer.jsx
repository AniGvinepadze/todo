// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import styles from "./MainContainer.module.scss";
// import plus from "/plus.svg";
// import clipBoard from "/Clipboard.svg";
// import check from "/check.svg";
// import trash from "/trash.svg";
// import checkOn from "/checkOn.svg";
// import apiRequest from "../../api/apiRequest";

// const MainContainer = () => {
//   const [loading, setLoading] = useState(true);
//   const [value, setValue] = useState([]);
//   const [error, setError] = useState("");
//   const [updatedValue, setUpdatedValue] = useState("");

//   useEffect(() => {
//     const fetchApi = async () => {
//       const url = "http://localhost:5174/tasks";
//       const data = await apiRequest(url);
//       setLoading(false);

//       if (data.error) {
//         setError(data.error);
//       } else {
//         setValue(data);
//       }
//     };
//     fetchApi();
//   }, []);

//   const handleAddData = async (e) => {
//     e.preventDefault();

//     const url = "http://localhost:5174/tasks";
//     const dataToAdd = { id: uuidv4(), title: updatedValue, complate: false };

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(dataToAdd),
//     };

//     const data = await apiRequest(url, options);
//     if (data.error) {
//       setError(data.error);
//     } else {
//       setValue((prev) => [...prev, dataToAdd]);
//       setUpdatedValue("");
//     }
//   };
//   const handleRemoveData = async (id) => {
//     const url = `http://localhost:5174/tasks/${id}`;
//     const options = {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const data = await apiRequest(url, options);
//     if (data.error) {
//       setError(data.error);
//     } else {
//       setValue((perv) => perv.filter((value) => value.id != id));
//     }
//   };

//   const handleComplatedData = async (id) => {
//     const valueupdate = value.find((value) => value.id === id);
//     const url = `http://localhost:5174/tasks/${id}`;
//     const updateValue = { ...valueupdate, complate: !valueupdate.complate };

//     const options = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updateValue),
//     };

//     const data = await apiRequest(url, options);
//     if (data.error) {
//       setError(data.error);
//     } else {
//       fetchApi();
//     }
//   };

//   const express = require('express');
//   const app = express();
//   const port = 5174;
  
  
//   app.get('/tasks', (req, res) => {
//     res.json(tasks);
//   });
  
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

//   const cors = require('cors');
// app.use(cors());

//   const totalData = value.length;
//   console.log(totalData);
//   const completedData = value.filter((value) => value.complate).length;

//   return (
//     <main>
//       <div className={styles.main_container}>
//         <div className={styles.main_content}>
//           <div className={styles.form_container}>
//             <form onSubmit={handleAddData}>
//               <label>
//                 <input
//                   type="text"
//                   value={updatedValue}
//                   onChange={(e) => {
//                     setUpdatedValue(e.target.value);
//                   }}
//                   placeholder="Add a new task"
//                   required
//                 />
//               </label>
//               <button type="submit">
//                 <div>
//                   <span>Add</span>
//                   <img src={plus} alt="plus" />
//                 </div>
//               </button>
//             </form>
//           </div>
//           <div className={styles.Tasks_container}>
//             <div className={styles.tasks_header}>
//               <div className={styles.tasks_Box}>
//               <p>Tasks created: <span>{totalData}</span></p>
//               </div>
//               <div className={styles.complate_tasks_Box}>
//                 <div>
//                 <span>{completedData}</span> of <span>{totalData}</span>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.tasks_Container}>
//               {value.length === 0 ? (
//                 <div className={styles.tasks_Not_Found}>
//                   <div>
//                     <img src={clipBoard} alt="No tasks" />
//                   </div>
//                   <p className={styles.not_Found_p}>
//                     You don't have any tasks registered yet. Create tasks and
//                     organize your to-do items.
//                   </p>
//                 </div>
//               ) : loading ? (
//                 <p>Loading...</p>
//               ) : error ? (
//                 <p>{error}</p>
//               ) : (
//                 <ul>
//                   {value.map((value) => (
//                     <li key={value.id}>
//                       <div className={styles.taskBox}>
//                         <button onClick={() => handleComplatedData(value.id)}>
//                           <div>
//                             <img
//                               src={value.complate ? checkOn : check}
//                               alt="off"
//                             />
//                           </div>
//                         </button>
//                         <div>
//                           <p
//                             className={`${styles.task} ${
//                               value.complate ? styles["underline"] : ""
//                             }`}
//                           >
//                             {value.title}
//                           </p>
//                         </div>
//                         <button onClick={() => handleRemoveData(value.id)}>
//                           <img src={trash} alt="remove" />
//                         </button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MainContainer;












import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./MainContainer.module.scss";
import plus from "/plus.svg";
import clipBoard from "/Clipboard.svg";
import check from "/check.svg";
import trash from "/trash.svg";
import checkOn from "/checkOn.svg";
import apiRequest from "../../api/apiRequest";

const MainContainer = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState([]);
  const [error, setError] = useState("");
  const [updatedValue, setUpdatedValue] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = "http://localhost:5174/tasks";
      const data = await apiRequest(url);
      setLoading(false);

      if (data.error) {
        setError(data.error);
      } else {
        setValue(data);
      }
    };
    fetchApi();
  }, []);

  const handleAddData = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5174/tasks";
    const dataToAdd = { id: uuidv4(), title: updatedValue, complate: false };

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataToAdd),
    };

    const data = await apiRequest(url, options);
    if (data.error) {
      setError(data.error);
    } else {
      setValue((prev) => [...prev, dataToAdd]);
      setUpdatedValue("");
    }
  };

  const handleRemoveData = async (id) => {
    const url = `http://localhost:5174/tasks/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = await apiRequest(url, options);
    if (data.error) {
      setError(data.error);
    } else {
      setValue((perv) => perv.filter((value) => value.id !== id));
    }
  };

  const handleComplatedData = async (id) => {
    const valueupdate = value.find((value) => value.id === id);
    const url = `http://localhost:5174/tasks/${id}`;
    const updateValue = { ...valueupdate, complate: !valueupdate.complate };

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateValue),
    };

    const data = await apiRequest(url, options);
    if (data.error) {
      setError(data.error);
    } else {
      fetchApi();
    }
  };

  const totalData = value.length;
  const completedData = value.filter((value) => value.complate).length;

  return (
    <main>
      <div className={styles.main_container}>
        <div className={styles.main_content}>
          <div className={styles.form_container}>
            <form onSubmit={handleAddData}>
              <label>
                <input
                  type="text"
                  value={updatedValue}
                  onChange={(e) => {
                    setUpdatedValue(e.target.value);
                  }}
                  placeholder="Add a new task"
                  required
                />
              </label>
              <button type="submit">
                <div>
                  <span>Add</span>
                  <img src={plus} alt="plus" />
                </div>
              </button>
            </form>
          </div>
          <div className={styles.Tasks_container}>
            <div className={styles.tasks_header}>
              <div className={styles.tasks_Box}>
                <p>Tasks created: <span>{totalData}</span></p>
              </div>
              <div className={styles.complate_tasks_Box}>
                <div>
                  <span>{completedData}</span> of <span>{totalData}</span>
                </div>
              </div>
            </div>
            <div className={styles.tasks_Container}>
              {value.length === 0 ? (
                <div className={styles.tasks_Not_Found}>
                  <div>
                    <img src={clipBoard} alt="No tasks" />
                  </div>
                  <p className={styles.not_Found_p}>
                    You don't have any tasks registered yet. Create tasks and
                    organize your to-do items.
                  </p>
                </div>
              ) : loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <ul>
                  {value.map((value) => (
                    <li key={value.id}>
                      <div className={styles.taskBox}>
                        <button onClick={() => handleComplatedData(value.id)}>
                          <div>
                            <img
                              src={value.complate ? checkOn : check}
                              alt="off"
                            />
                          </div>
                        </button>
                        <div>
                          <p
                            className={`${styles.task} ${
                              value.complate ? styles["underline"] : ""
                            }`}
                          >
                            {value.title}
                          </p>
                        </div>
                        <button onClick={() => handleRemoveData(value.id)}>
                          <img src={trash} alt="remove" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContainer;
