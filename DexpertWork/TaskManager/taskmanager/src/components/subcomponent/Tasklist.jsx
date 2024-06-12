import React, { useEffect } from "react";
import TaskItem from "./TaskItem";
import "../../styles/buttons.css";
import "../../styles/fontStyles.css";

const Tasklist = ({ userId, tasks, fetchTasks }) => {
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="container mt-3">
      <h2 className="text-center text-decoration-underline mb-3 my-2 py-1 text-black">
        Task List
      </h2>
      <TaskItem userId={userId} tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
};

export default Tasklist;





















// import React, { useCallback, useEffect } from "react";
// import TaskItem from "./TaskItem";
// import axios from "axios";
// import "../../styles/buttons.css";
// import "../../styles/fontStyles.css";

// const Tasklist = ({ userId, tasks, fetchTasks }) => {
//   useEffect(() => {
//     fetchTasks();
//   }, [fetchTasks]);

//   return (
//     <div className="container mt-5 me-5">
//       <div className="mb-4">
//         <div className="">
//           <h2 className="text-center text-decoration-underline mb-5 amaranth-regular my-2 py-1">
//             Task List
//           </h2>
//         </div>
//       </div>
//       <TaskItem userId={userId} tasks={tasks} fetchTasks={fetchTasks} />
//     </div>
//   );
// };

// export default Tasklist;