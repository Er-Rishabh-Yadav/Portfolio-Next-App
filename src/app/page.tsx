export default function MyHome(){
    return (
        
    <div className="bg-slate-800 min-h-screen grid grid-flow-col grid-col-1 justify-items-center items-center">
   <div>
   <h1 className="group text-white font-bold text-2xl">You Want to see my Portfolio <span className="font- text-3xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">!</span></h1>
{/* // get underline for above text */}
     <div className="bg-yellow-500 max-w-lg p-1 rounded-full"></div>
        <div className="bg-slate-600 m-4 p-3 ">
            {/* // image is this div of my card */}
            <div className=" justify-items-center items-center flex flex-col " >
                <img className="bg-white md:drop-shadow-2xl p-2 rounded-full" width={150}  src="/RishabhProfile.jpg"></img>
            </div>
            <div >
                <h1 className="text-white text-center font-semibold p-2 font-sans tracking-widest text-3xl">Rishabh Yadav</h1>
                <h1 className="text-slate-400 text-center font-semibold  font-sans  text-lg">Full Stack Developer</h1>
                {/* lets explore link */}
                <div className="flex justify-center items-center">

             <button  className="group bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                <a href="/profile">
                Let's Explore{' '}
                </a>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span></button>
            
                </div>
            
            </div>
        </div>
    </div>   
   
    </div> 
    );
}