export default function ProjectForm() {
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }

  return (
    <>
      {/* This section shows Header of Adding New Projects   */}
      <section
        className="flex flex-row w-[1218] h-14 px-3 py-6 justify-between items-center bg-white
 mb-4"
      >
        <div className="text-black font-sans text-xl font-semibold not-italic leading-7 w-40  flex items-center  gap-1 h-10">
          Add New Project
        </div>
        <div className="flex flex-row items-center justify-center bg-white border rounded-sm shadow-sm border-slate-200   w-28 h-8 px-1 py-4 flex-shrink-0 text-black font-sans  text-sm font-normal leading-snug gap-2">
          All Project{" "}
          <span className="w-2 h-3">
            <img src="/Images/downarrow.svg" />{" "}
          </span>{" "}
        </div>
      </section>
      {/* Shows a Details of Project */}
      <section className="flex flex-col items-center flex-shrink-0 justify-between w-auto py-1 bg-white ">
        <form className="flex flex-col px-6 py-5 items-center justify-center gap-3 ">
          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6 }"
              for="Project"
            >
              Project Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Project name"
              className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
            />
          </div>

          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              for="Project"
            >
              Project Manager :
            </label>
            <input
              type="text"
              id="name"
              placeholder="Admin name"
              className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
            />
          </div>

          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              for="Project"
            >
              Project Description :
            </label>
            <input
              type="text"
              id="name"
              placeholder="Description.."
              className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              for="Project"
            >
              Add Resources :
            </label>
            <textarea
              type="text"
              id="name"
              placeholder="Please enter name"
              className="text-slate-500 font-sans text-sm font-normal not-italic leading-6  self-stretch items-center flex-1 border  rounded-sm  border-slate-200 bg-slate-100 shadow px-1 py-1 h-20 w-96 m-1"
            />
          </div>

          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              for="Project"
            >
              Project Department :
            </label>
            <input
              type="text"
              id=" name"
              placeholder=" Please describe your customer service, internal customers directly.."
              className="text-slate-500 font-sans text-sm font-normal not-italic leading-6  self-stretch items-center flex-1 border  rounded-sm  border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
            />
          </div>

          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              for="Project"
            >
              Project Duration :
            </label>
            <div>
              <input
                type="date"
                id="name"
                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-[184px] m-1"
              />
              <span>-</span>
              <input
                type="date"
                id="name"
                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-[184px] m-1"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              for="Project"
            >
              Budget <span>(optional)</span> :
            </label>
            <input
              type="text"
              id="name"
              className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
              placeholder="...."
            />
          </div>
        </form>
        <button
          onSubmit=""
          className="ml-[90%] m-10 px-1 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm w-16 h-8 font-sans text-center text-white text-sm font-normal not-italic leading-3 flex-row-reverse"
        >
          Next
        </button>
      </section>
    </>
  );
}
