export default function NavBar() {
  return (
    <>
      <div className="flex bg-white w-full h-20 flex-row justify-around place-items-center">
        <div className="text-black font-bold text-2xl mx-5">MUSCLED</div>
        <div className="text-red-600 font-medium">SEO & Lead Generation</div>
        <div className="font-medium text-slate-800">Ecommerce</div>
        <div className="font-medium text-slate-800">UX & Interactive</div>
        <div className="font-medium text-slate-800">Our Technology</div>
        <div className="font-medium text-slate-800">Who We Are</div>
        <div
          className="bg-black text-white px-5 py-2 mx-5 hover:cursor-pointer"
          style={{ borderRadius: "2rem" }}
        >
          Get Free Proposal
        </div>
      </div>
    </>
  );
}
