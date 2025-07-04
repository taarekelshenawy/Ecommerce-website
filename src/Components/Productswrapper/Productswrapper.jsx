import img1 from "../images/imageone.jpg";
import img2 from "../images/imagetwo.jpg";
import img3 from "../images/imgfour.jpg";

export default function Productswrapper() {
  return (
    <div className="  flex justify-between items-center flex-wrap gap-4  w-[80%] mx-auto  ">
    
        <div
        style={{ backgroundImage: `url(${img1})` }}
        className="px-20 py-10 flex flex-col gap-3
            justify-center pl-4 rounded-lg "
      >
        <p className="text-[#00B853] font-bold text-sm">Weekend Discount 40%</p>
        <p className="text-2xl font-bold text-[#3E445A]">
          Stylish & Comfortable
        </p>
        <p className="text-sm font-medium text-amber-100">
          Perfect for every season
        </p>
        <button className="w-[100px] h-[34px] text-sm cursor-pointer text-white font-bold rounded-4xl bg-[#C2C2D3]">
          Shop Now
        </button>
      </div>

      <div
        style={{ backgroundImage: `url(${img2})` }}
        className="px-20 py-10 flex flex-col gap-3
            justify-center pl-4 rounded-lg"
      >
        <p className="text-[#00B853] font-bold text-sm">Weekend Discount 40%</p>
        <p className="text-2xl font-bold text-[#3E445A]">
          Stylish & Comfortable
        </p>
        <p className="text-sm font-medium text-amber-100">
          Perfect for every season
        </p>
        <button className="w-[100px] h-[34px] text-sm cursor-pointer text-white font-bold rounded-4xl bg-[#C2C2D3]">
          Shop Now
        </button>
      </div>

      <div
        style={{ backgroundImage: `url(${img3})` }}
        className="px-20 py-10 flex flex-col gap-3
            justify-center pl-4 rounded-lg"
      >
        <p className="text-[#00B853] font-bold text-sm">Weekend Discount 40%</p>
        <p className="text-2xl font-bold text-[#3E445A]">
          Stylish & Comfortable
        </p>
        <p className="text-sm font-medium text-amber-100">
          Perfect for every season
        </p>
        <button className="w-[100px] h-[34px] text-sm cursor-pointer text-white font-bold rounded-4xl bg-[#C2C2D3]">
          Shop Now
        </button>
      </div>

   
      
    </div>
  );
}
