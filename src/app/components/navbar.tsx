import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-[91px] bg-[#252b42] text-white flex justify-evenly items-center px-10">
      
      {/* Brand Name Section (on the left side) */}
      <div className="w-auto">
        <h3 className="pl-32 font-montserrat font-bold text-2xl leading-8 tracking-widest">BrandName</h3>
      </div>

      {/* Center Navigation Links */}
      <div className="flex space-x-8 mx-auto ">
        <Link href="/home" className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center hover:text-sky-400">Home</Link>
        <Link href="/product" className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center hover:text-sky-400">Product</Link>
        <Link href="/pricing" className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center hover:text-sky-400">Pricing</Link>
        <Link href="/contact" className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center hover:text-sky-400">Contact</Link>
      </div>

      {/* Right Section (Login & Join Us buttons with space between them) */}
      <div className="flex items-center space-x-8 pr-8 ml-10">
  
      <a href="login">
  <button className="w-[41px] h-[22px] pb-4 font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-right hover:text-sky-400">
    Login
  </button>
</a>

        <div className="w-[214px] h-[52px]  ">
          <div className="w-[110px] h-[52px] rounded-[5px] pt-[15px] pr-[25px] pb-[15px] pl-[25px] gap-[15px] bg-[#23a6f0]">
            <a href="JOIN US">
          <button className="w-[60px] h-[22px] font-montserrat font-bold text-sm text-nowrap leading-[22px] tracking-[0.2px] bg-[#23A6F0] hover:text-black">JOIN US</button>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

