import React, { useState } from "react";

const Form = () => {
  const [title, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    console.log(dueDate);
    console.log(category);
    console.log(priority);
    setTittle("");
    setDescription("");
    setDueDate("");
    setPriority("");
    setCategory("");
  };
  return (
    <div className="container">
      <form className="w-full max-w-lg" onSubmit={handleAdd}>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Tittle
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTittle(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Priority
            </label>
            <div className="md:flex md:items-center mb-6 gap-2">
              {/* <div className="md:w-1/3"></div> */}
              <label className=" block text-gray-500 font-bold">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  checked={priority === "High"}
                  value="High"
                  onChange={(e) => setPriority(e.target.value)}
                />
                <span className="text-sm text-red-500">High</span>
              </label>
              <label className=" block text-gray-500 font-bold">
                <input
                  className="mr-2 leading-tight"
                  value="Medium"
                  checked={priority === "Medium"}
                  onChange={(e) => setPriority(e.target.value)}
                  type="checkbox"
                />
                <span className="text-sm text-yellow-700">Medium</span>
              </label>
              <label className=" block text-gray-500 font-bold">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  checked={priority === "Low"}
                  value="Low"
                  onChange={(e) => setPriority(e.target.value)}
                />
                <span className="text-sm text-green-700">Low</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Due Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Categories
            </label>
            <div className="md:flex md:items-center mb-6 gap-2">
              {/* <div className="md:w-1/3"></div> */}
              <select
                className="block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mr-2  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Office</option>
                <option>Personal</option>
                <option>Others</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              placeholder="Description"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Form;
