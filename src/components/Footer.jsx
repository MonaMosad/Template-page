export default function Footer({text}) {
  return (
    <footer className="pt-12 pb-6 max-w-5xl mx-auto">
      <div className="flex gap-12 items-start mb-16">
        
        <div className="bg-[#D9D9D9] p-8 rounded-2xl flex-1 flex justify-between items-start">
          <div className="space-y-3 text-gray-800 text-sm">
            <h3 className="text-2 xl font-bold text-black mb-4">Company</h3>
            <p>22 Street of XYZ</p>
            <p>Cairo, Egypt</p>
            <p>0123456789</p>
            <p>email@domain.com</p>
            <p className="font-bold text-black text-base pt-1">domain.com</p>
            
            <button className="mt-6 bg-black text-white py-4 px-8 w-[200px] h-[62px] rounded-lg text-xl font-medium hover:bg-gray-800 transition-colors">
              Contact Us
            </button>
          </div>

          <div className="w-[170px]
           h-[80px] border border-gray-400 rounded-xl flex items-center justify-center font-bold text-2xl text-black bg-white/50">
            LOGO
          </div>
        </div>

        <div className="flex-1 space-y-6 pt-2">
          <h3 className="text-2xl font-bold text-black">Start With Themes.</h3>
          
          <hr className="border-gray-200 my-4" />

          <p className="text-xs leading-relaxed text-gray-700">
            <span className="font-bold text-black">Disclaimer:</span> It is a
            {text}
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600">
        Copyright © <span className="font-bold text-black">2026 Company</span>.
        Distribution is prohibited without Company written approval.
      </div>
    </footer>
  );
}