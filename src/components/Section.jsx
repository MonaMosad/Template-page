export default function Section({ title, children }) {
  return (
    <section className="flex gap-8 py-8 max-w-5xl mx-auto">
      <h2 className="w-40 shrink-0 text-2xl font-bold text-black">
        {title}
      </h2>
      <div className="text-lg flex-1 min-w-0" >
        {children}
      </div>
    </section>
  );
}
