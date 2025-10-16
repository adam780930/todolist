import NewDetail from "./NewDetail.jsx";

export default function Tasks({ details, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="test-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewDetail onAdd={onAdd} />
      {details.length === 0 && (
        <p className="text-stone-800 my-4">
          This task does not have details yet.
        </p>
      )}

      {details.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {details.map((detail) => (
            <li key={detail.id} className="flex justify-between my-2"> 
              <span>{detail.text}</span>
              <button
                className="text-stone-800 hover:text-red-500 ml-4"
                onClick={() => onDelete(detail.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
