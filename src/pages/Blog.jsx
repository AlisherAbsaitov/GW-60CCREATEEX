
export default function App() {
  const posts = [
    {
      id: 1,
      category: "Marketing",
      title: "What is traffic arbitrage and does it really make money?",
      image: "https://source.unsplash.com/600x400?illustration",
    },
    {
      id: 2,
      category: "Development",
      title: "How to choose the first programming language for a beginner",
      image: "https://source.unsplash.com/600x400?laptop",
    },
    {
      id: 3,
      category: "Design",
      title: "Should you choose a creative profession?",
      image: "https://source.unsplash.com/600x400?design",
    },
    {
      id: 4,
      category: "HR",
      title: "HR statistics: job search, interviews, hiring and recruiting",
      image: "https://source.unsplash.com/600x400?keyboard",
    },
    {
      id: 5,
      category: "Management",
      title: "What to do and who to talk to if you want to get feedback",
      image: "https://source.unsplash.com/600x400?idea",
    },
    {
      id: 6,
      category: "Design",
      title: "What are color profiles and how they work in graphic design",
      image: "https://source.unsplash.com/600x400?color",
    },
    {
      id: 7,
      category: "Management",
      title: "Startup: how to build a team that will live longer than a year",
      image: "https://source.unsplash.com/600x400?startup",
    },
    {
      id: 8,
      category: "Marketing",
      title: "How to get customers to love your business from the start",
      image: "https://source.unsplash.com/600x400?typewriter",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-2xl font-bold">
              Createx School Journal
            </h1>

            <div className="flex items-center gap-4">
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Blog category</option>
              </select>

              <input
                type="text"
                placeholder="Search..."
                className="border rounded-md px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>
      </header>


      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <span className="text-xs text-red-500 font-medium">
                  {post.category}
                </span>

                <h3 className="mt-2 font-semibold text-lg leading-snug hover:text-red-500 transition">
                  {post.title}
                </h3>

                <button className="mt-4 text-red-500 text-sm font-medium hover:underline">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-10 gap-3 text-sm">
          <button className="px-3 py-1 bg-red-500 text-white rounded">
            1
          </button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">4</button>
        </div>
      </section>

      <section className="bg-gray-100 mt-16 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">
            Want to get the best articles weekly?
          </h2>
          <p className="mt-2 text-gray-600">
            Subscribe to our newsletter!
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your working email"
              className="px-4 py-3 rounded-md border w-full sm:w-80"
            />
            <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
