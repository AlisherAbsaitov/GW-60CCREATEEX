import { FiSearch } from "react-icons/fi";

const events = [
  {
    day: "05",
    month: "August",
    time: "11:00 – 14:00",
    title:
      "Formation of the organizational structure of the company in the face of uncertainty.",
    type: "Online master-class",
    active: false,
  },
  {
    day: "24",
    month: "July",
    time: "11:00 – 12:30",
    title: "Building a customer service department. Best Practices.",
    type: "Online lecture",
    active: false,
  },
  {
    day: "16",
    month: "July",
    time: "10:00 – 13:00",
    title:
      "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
    type: "Online workshop",
    active: true,
  },
  {
    day: "10",
    month: "July",
    time: "9:00 – 14:00",
    title:
      "Find and evaluate: search and assessment tools for candidates.",
    type: "Online workshop",
    active: false,
  },
  {
    day: "27",
    month: "June",
    time: "15:00 – 19:00",
    title:
      "Connection to Microsoft Excel and Google Sheets. Data Visualization in Power BI.",
    type: "Online master-class",
    active: false,
  },
];

export default function Events() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest text-gray-400 uppercase">
          OUR EVENTS
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Lectures, workshops & master-classes
        </h1>
      </div>


      <div className="flex flex-wrap shadow items-center gap-4 mb-8">
        <select className=" rounded-md px-3 py-2 text-sm text-gray-600">
          <option>All Themes</option>
        </select>

        <select className="shadow rounded-md px-3 py-2 text-sm text-gray-600">
          <option>Newest</option>
        </select>

        <select className="shadow rounded-md px-3 py-2 text-sm text-gray-600">
          <option>9</option>
        </select>

        <span className="text-sm text-gray-400">Events per page</span>

        <div className="ml-auto relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search event..."
            className="border rounded-md pl-10 pr-4 py-2 text-sm"
          />
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex items-center justify-between bg-white rounded-lg p-6 shadow-sm ${
              event.active ? "ring-2 ring-orange-500" : ""
            }`}
          >
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-700">
                  {event.day}
                </div>
                <div className="text-sm text-gray-500">{event.month}</div>
                <div className="text-xs text-gray-400">{event.time}</div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 max-w-xl">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400">{event.type}</p>
              </div>
            </div>

            <button
              className={`px-5 py-2 rounded-md text-sm font-medium border ${
                event.active
                  ? "bg-orange-500 text-white border-orange-500"
                  : "text-orange-500 border-orange-500 hover:bg-orange-500 "
              }`}
            >
              View more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
