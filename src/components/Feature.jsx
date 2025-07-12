
function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start space-x-4 max-w-xs">
      <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0 mt-1">
        {icon}
        {/* <Shield className="w-5 h-5 text-white" /> */}
      </div>
      <div className="w-[210px]" >
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
export default Feature;

