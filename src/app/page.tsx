import InfoSection from "./components/InfoSection";
import "./globals.css";

// TODO: remove
const DUMMY_TEXT = `Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.`;

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
          <InfoSection content={`Short paragraph about London. ${DUMMY_TEXT}`} />
          <InfoSection content={`Current weather in London. ${DUMMY_TEXT}`} />
        </section>
      </article>
    </main>
  );
}
