import "./globals.css";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen bg-gray-100 p-6">
      <article className="max-w-md bg-white shadow-md rounded-md p-6">
        <section className="flex flex-col gap-4">
          <header>
            <h1 className="text-2xl font-bold">Trip Planner</h1>
          </header>
          <div>
            <select name="location" className="w-full p-2 border rounded-lg">
              <option>London</option>
              <option>Paris</option>
              <option>Rome</option>
            </select>
          </div>

          <section className="border-dashed border-2 border-gray-300 p-4">
            <p className="text-gray-700">
              Short paragraph on London Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </section>

          <section className="border-dashed border-2 border-gray-300 p-4">
            <p className="text-gray-700">
              Current weather in London Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </section>
        </section>
      </article>
    </main>
  );
}
