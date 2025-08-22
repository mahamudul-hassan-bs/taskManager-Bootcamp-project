// import React, { useState } from "react";
import { toast } from "react-toastify";
import { Trash } from "lucide-react";
import { FilePenLine } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { TaskContext } from "../context/taskContext";

const Card = ({
  title,
  description,
  status,
  priority,
  dueDate,
  category,
  id,
}) => {
  const { token, backendUrl } = useContext(UserContext);
  const { getTask } = useContext(TaskContext);

  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    if (status) {
      setStatusText("Completed");
    } else {
      setStatusText("Pending");
    }
  }, [status]);

  const handleChangeStatus = async (id, token) => {
    const updatedStatus = !status;

    try {
      const res = await axios.put(
        `${backendUrl}/api/task/updateTask/${id}`,
        {
          title,
          description,
          priority,
          category,
          dueDate,
          status: updatedStatus,
        },
        {
          headers: { token },
        }
      );

      if (res.data.success) {
        getTask();
        toast.success("Status Updated");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (id, token) => {
    try {
      const res = await axios.delete(
        backendUrl + `/api/task/deleteTask/${id}`,

        {
          headers: { token },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        getTask();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="grid grid-cols-7 gap-4  w-full  h-auto p-2 border-b-2 border-gray-200">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <p>{category}</p>
      </div>
      <div>
        <p
          className={
            priority === "Low"
              ? "text-green-600 font-semibold"
              : priority === "Medium"
              ? "text-yellow-600 font-semibold"
              : "text-red-600 font-semibold"
          }
        >
          {priority}
        </p>
      </div>
      <div>
        <p>{dueDate.split("T")[0]}</p>
      </div>
      <div>
        <select
          name=""
          value={statusText}
          onChange={() => handleChangeStatus(id, token)}
        >
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="text-center px-2">
        {/* <button>
          <FilePenLine color="green" />
        </button> */}
        <button onClick={() => handleDelete(id, token)}>
          <Trash color="red" />
        </button>
      </div>
    </div>
  );
};

export default Card;
