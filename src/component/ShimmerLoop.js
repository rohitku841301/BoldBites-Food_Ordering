const ShimmerLoop = ()=>{
    return(
        <div className="bg-black rounded-2xl relative w-80 h-72 m-4 transition-transform duration-300 transform scale-100 hover:scale-90">
          <div className="absolute text-white bottom-0 py-2 px-1 w-full">
            <h2 className="w-full h-7 rounded-lg bg-neutral-900"></h2>
            <div className="w-full h-4 my-2 flex justify-between">
              <p className="w-48 bg-neutral-900 rounded-2xl"></p>
              <h4 className="w-10 bg-neutral-900 rounded-2xl">
                <span></span>
              </h4>
            </div>
            <div className="my-2 flex justify-between">
              <h5 className="w-60 h-4 rounded-2xl bg-neutral-900 "></h5>
              <h5 className="w-20 h-4 rounded-2xl bg-neutral-900 "></h5>
            </div>
            <h4 className="w-32 h-5 my-2 rounded-2xl bg-neutral-900"></h4>
          </div>
        </div>
    )
}

export default ShimmerLoop;