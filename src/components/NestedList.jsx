export default function NestedList({ title, items }) {
  return (
    <div>
      <h3 className="text-base font-bold text-black mb-4">{title}</h3>

      {items.map((main, i) => (
        <div key={i} className="mb-8">
          <p className="font-bold text-black text-lg mb-4">
            {i + 1}. {main.title}
          </p>

          <div className="pl-4 space-y-6">
            {main.subs.map((sub, j) => (
              <div key={j}>
                <p className="font-bold text-black text-lg mb-3">
                  {i + 1}.{j + 1}. {sub.title}
                </p>

                <ul className="space-y-3 pl-2">
                  {sub.points.map((point, k) => (
                    <li key={k} className="flex gap-4 text-lg">
                      <span className="w-12 shrink-0">
                        {i + 1}.{j + 1}.{k + 1}.
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}