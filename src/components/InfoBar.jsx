



export default function InfoBar() {
  return (
    <div className="flex justify-between items-center bg-[#F3F3F3] border border-[#D9D9D9] p-6 rounded-xl">

      <div className="flex items-center gap-4">
        <span className="w-16 text-base leading-tight text-gray-500 uppercase text-right">
          Company Details
        </span>
        <div className="w-px h-12 bg-gray-300"></div>
        <div>
          <p className="font-bold">ABC Company</p>
          <p className="text-sm">22 Street of XYZ</p>
          <p className="text-sm">Cairo, Egypt</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-base leading-tight text-gray-500 uppercase text-right">
          Order Number
        </span>
        <div className="w-px h-12 bg-gray-300"></div>
        <div>
          <p className="font-bold">
            <span className="text-gray-500 text-xl font-normal">Ref. </span>
            45AGHK47SH
          </p>
          <p className="text-lg">23 December, 2024</p>
        </div>
      </div>

      
      <button className="bg-black text-white py-4 px-8 text-sm font-semibold rounded-xl">
        Export as PDF
      </button>

    </div>
  )
}