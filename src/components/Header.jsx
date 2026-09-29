export default function Header() {
  return (
    <header className="flex justify-between items-start py-8">
      <div>
        <h1 className="text-[64px] tracking-[-2px] font-bold">Template</h1>
        <p className="mt-2 text-3xl tracking-[-2px] font-bold">Text can be here</p>
      </div>

      <div className="h-[136px] w-[296px] border border-gray-500 rounded-lg flex items-center justify-center">
        <span className="font-bold text-4xl">LOGO</span>
      </div>
    </header>
  )
}