

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between
     font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Yousef's Daily Blog of radical nonsense</h1>
            <h2 className="mt-5 md:mt-0">
                Aloha Dance...Bonjour!{""}
                <span className="underline decoration-4 decoration-[#f7ab0a]">
                     ,Everyone's welcome here
                </span>{""}
                 ,with minimal bare metal knowledge of the Devosphere
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            New product features | The latest news in technology & Science | the weekly hobbyist/freelancer favorite worst nightmares & More!
        </p>
    </div>
  )
}

export default Banner;