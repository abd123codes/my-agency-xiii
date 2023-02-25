export const Footer = () => {
  return (
    <footer className="w-[max(23.4375em,100%)] font-[Inter]">
      <div className="text-[0] font-black tablet:overflow-hidden tablet:whitespace-nowrap leading-[1em] relative top-[0.35em] left-[-1.51em] w-[115.73vw] tablet:text-[10.42vw] text-stroke">
        FINTECH BLOCKCHAIN WEB3 DIGITAL TRANSFORMATION
      </div>
      <div className="relative z-10">
        <div className="bg-footer-img h-[max(22.125em,94.4vw)] flex items-center justify-center bg-cover bg-no-repeat bg-center tablet:h-[41.67vw] tablet:block">
          <div className="w-[87.2%] text-[#FFFFFF] flex flex-col gap-[max(3em,12.8vw)] tablet:w-[30%] tablet:gap-[5.21vw] tablet:relative tablet:top-[7.8125vw] tablet:left-[10.416vw]">
            <div className="flex flex-col gap-[max(1.625em,6.933vw)] tablet:gap-[2.92vw]">
              <div className="font-black text-[max(1.875em,8vw)] leading-[1.21em] tablet:text-[4.6875vw]">
                Let's Talk
              </div>
              <div className="w-[95.41%] text-[max(1em,4.266vw)] font-[400] leading-[1em] tablet:text-[1.3vw] tablet:leading-[1.28em]">
                UX Designers and strategist architect info@xiii.com
              </div>
            </div>
            <div className="flex flex-row w-[93.6%] justify-between text-[max(1em,4.266vw)] leading-[1.625em] underline tablet:text-[1.04vw] tablet:w-[70%]">
              <div className="tablet:leading-[1.5em]">Instagram</div>
              <div className="tablet:leading-[1.5em]">Dribble</div>
              <div className="tablet:leading-[1.5em]">Twitter</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
