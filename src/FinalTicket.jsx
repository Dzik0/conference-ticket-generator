function FinalTicket() {
  return (
    <div className="px-6 py-10">
      <div className="mb-15 text-center">
        <div className="flex w-full items-center justify-center">
          <div className="w-55">
            <img src="/logo-full.svg" alt="" className="w-10" />
          </div>
        </div>
        <h2 className="mt-10 text-3xl font-semibold">
          Congrats, <span>Piotr</span> <span>Głazowski</span>! <br />
          Your ticket is ready.
        </h2>
        <p className="mt-5 text-xl text-neutral-400">
          We've emailed your ticket to{' '}
          <span className="text-orange-500">hunter92@gmail.com</span> and will
          send updates int he run up to the event.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="relative max-w-[500px]">
          <div className="absolute p-4">
            <img src="/logo-full.svg" alt="" />
            <p className="mt-1 ml-12 text-xs text-neutral-400">
              Jan 31, 2025 / Austin, TX
            </p>
          </div>
          <div className="absolute bottom-0 px-4 py-3">
            <div className="flex flex-row items-center gap-4">
              <div className="h-10 w-10 overflow-hidden rounded-md">
                <img src="/image-avatar.jpg" alt="" />
              </div>
              <div>
                <p className="text-xl">Jonatan Kristof</p>
                <div className="flex flex-row items-center gap-1">
                  <div className="w-5">
                    <img src="/icon-github.svg" alt="" />
                  </div>
                  <p className="text-xs text-neutral-400"> @jontatan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[50%] right-0 -translate-y-1/2 rotate-90 text-xl text-neutral-300">
            #012029
          </div>
          <img src="/pattern-ticket.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FinalTicket;
