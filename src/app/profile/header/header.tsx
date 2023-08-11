export default function Header(){
    return(
        
    <div className="relative bg-fixed h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/bg-1.jpg")' }}>
    <div className="absolute inset-0 bg-opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-semibold mb-2 uppercase tracking-widest font-serif ">Rishabh Yadav</h1>
      <p className="text-gray-300 text-lg">Full stack Developer and Java Programmer.</p>
      {/* <img src="/m-bg.jpg" alt="Overlay" className="mt-4 h-20" /> */}
    </div>
  </div>
    );
}