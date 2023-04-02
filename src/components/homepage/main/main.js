import Carousel from "./../carousel/carousel";

export const Main = () => {
  return (
    <main className="w-[max(375px,100%)] border">
      {/** intro */}
      <div className="mt-[max(43px,11.47vw)] flex flex-col items-center gap-[max(24px,6.4vw)] w-[max(223px,62.13vw)] mx-auto">
        <div className="bg-XIII-img bg-center bg-no-repeat bg-contain w-[98.65%] h-[max(328px,87.47vw)]"></div>
        <div className="font-[700] text-[max(25px,6.67vw)] leading-[1.2em] text-center font-InaiMathi">
          Your number one design and solution strategist
        </div>
      </div>
      <div className="w-[max(326.25px,87vw)] h-[max(223.74px,59.66vw)] mt-[max(45.49px,12.13vw)] mx-auto bg-bg_img bg-no-repeat bg-contain bg-center"></div>
      <div className="w-[max(375px,100%)] h-[max(200px,53.33vw)] mt-[max(70.78px,18.87vw)] bg-[color:#015450]"></div>

      {/** stats */}
      <div className="w-[max(325px,86.67vw)] mx-auto mt-[max(58px,15.47vw)] flex flex-col gap-[max(47px,12.53vw)]">
        <div className="flex flex-col items-start gap-[max(28px,7.47vw)] font-[Inter]">
          <div className="w-[86.46%] font-black text-[max(70px,18.67vw)] leading-[1.14em]">
            WE ARE XIII
          </div>
          <div className="font-[400] text-[max(16px,4.267vw)] leading-[1.625em]">
            We are UX Design strategists with years of experience and a strong
            background in{" "}
            <span className="text-[#015450] font-[600]">
              Digital Transformation, Fintech, Blockchain, Web3, Enterprise
              products,
            </span>{" "}
            working with some of the best teams and clients on some of the
            leading financial organisations and teams.
          </div>
        </div>
        <div className="flex flex-col gap-[max(32px,8.53vw)]">
          <div className="flex flex-col gap-[max(18px,4.8vw)]">
            <div className="flex flex-col gap-[max(4px,1.07vw)]">
              <div className="text-[#015450] font-black text-[max(80px,21.33vw)] leading-[1.125em]">
                90%
              </div>
              <div className="text-[#080A16] font-[600] text-[max(24px,6.4vw)] leading-[1.25em] font-[Inter]">
                Success rate
              </div>
            </div>
            <div className="text-[#000000] font-[Inter] font-[500] text-[max(16px,4.27vw)] leading-[1.5em]">
              The boy made no answer; he shrank closer to the entrance. The
              first bell went.
            </div>
          </div>
          <div className="flex flex-col gap-[max(18px,4.8vw)]">
            <div className="flex flex-col gap-[max(4px,1.07vw)]">
              <div className="text-[#015450] font-black text-[max(80px,21.33vw)] leading-[1.125em]">
                50+
              </div>
              <div className="text-[#080A16] font-[600] text-[max(24px,6.4vw)] leading-[1.25em] font-[Inter]">
                Projects
              </div>
            </div>
            <div className="text-[#000000] font-[Inter] font-[500] text-[max(16px,4.27vw)] leading-[1.5em]">
              FIVE or six half-grown larrikinsonen sat on the sill of the big
              window
            </div>
          </div>
        </div>
      </div>

      {/** animation */}
      <div className="mt-[max(100px,26.67vw)] font-[Inter] overflow-hidden whitespace-nowrap">
        <div className="text-stroke font-black text-[max(80px,21.33vw)] leading-[1em] relative left-[100%] animate-slide-left">
          FINTECH BLOCKCHAIN WEB3 DIGITAL TRANSFORMATION
        </div>
        <div className="font-black text-[max(80px,21.33vw)] leading-[1em] relative animate-slide-right">
          FINTECH BLOCKCHAIN WEB3 DIGITAL TRANSFORMATION
        </div>
      </div>

      {/** carousel */}
      <Carousel />

      {/** comment */}
      <div className="w-[79.2vw] bg-[#E4E5E4] mx-auto mt-[9.95vw] mb-[max(13.3vw,3.1em)] border">
        <div className="text-[8.416vw] w-[80%] font-[900] text-[#20202033] mt-[4.5vw] mx-auto h-[1em]">
          “
        </div>
        <div className="w-[80%] mx-auto flex flex-row justify-between border mb-[9.22vw]">
          <div className="my-[0.45em] text-[2.083vw] leading-[1.75em] text-[500] w-[80.67%] ">
            I realized I had found something that was missing from every other
            school that I’d looked at — I loved how passionate everybody was
            about XIII agency.
          </div>
          <div className="w-[12.42%] flex flex-col gap-[1.25vw] items-center justify-center">
            <div className="w-[100%] h-[7.03vw] rounded-full border border-[black]"></div>
            <div className="flex flex-col gap-[0.417vw]">
              <div className="text-[1.5625vw] leading-[1.33vw] font-[500]">
                Sarah Lein
              </div>
              <div className="text-[1.042vw] leading-[2vw] font-[500] text-center">
                Infinix CEO
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
