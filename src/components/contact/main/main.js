import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export const Main = () => {
  //placeholder changer
  const [placeholderText, setPlaceholderText] = useState({
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    companyName: "Company name",
    message: "Message",
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    function handleResize() {
      if (mediaQuery.matches) {
        setPlaceholderText({
          firstName: "First name",
          lastName: "Last name",
          email: "Email Address",
          companyName: "Company name",
          message: "How can we help?",
        });
      } else {
        setPlaceholderText({
          firstName: "First name",
          lastName: "Last name",
          email: "Email",
          companyName: "Company name",
          message: "Message",
        });
      }
    }

    // add event listener for window resize
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    // cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("load", handleResize);
    };
  }, []);

  //EMAIL SENDER
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // const [firstName, lastName, email, companyName, message, ...prev] =
    //   e.target.elements;
    // console.log(
    //   firstName.value,
    //   lastName.value,
    //   email.value,
    //   companyName.value,
    //   message.value
    // );

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-w-[max(375px,100%)]">
      <div className="mt-[max(6.25rem,26.6vw)] w-[87.2%] mx-auto flex flex-col gap-[max(2rem,8.533vw)] font-[Inter,sans-serif] tablet:mt-[8.23vw] tablet:gap-[2.60vw] tablet:w-[79.17vw]">
        <div className="flex flex-col gap-[max(0.125rem,0.533vw)] w-[57.49%] tablet:gap-[0.625vw]">
          <div className="font-[700] text-[max(1.25rem,5.333vw)] leading-[1em] text-[#015450] tablet:text-[1.56vw]">
            XII
          </div>
          <div className="font-[900] text-[max(2.13rem,9vw)] leading-[1.25em] tablet:text-[9.375vw] tablet:leading-[1em] tablet:text-[#FFFFFF]">
            Let's talk
          </div>
        </div>
        <div className=" font-[400] text-[max(1.05rem,4.5vw)] leading-[1.625em] tablet:text-[1.25vw] tablet:leading-[1.67em] tablet:w-[52.45vw]">
          Every great relationship starts with a conversation. Whether you have
          detailed questions or just want to talk shop, we’d love to hear from
          you.
        </div>
      </div>
      <div className="w-[87.2%] h-[max(13.4375rem,57.33vw)] mx-auto mt-[max(2.5625rem,10.93vw)] rounded-[max(0.5rem,2.133vw)] tablet:w-[79.17vw] tablet:mt-[5.21vw] bg-contact-img bg-cover bg-no-repeat bg-center tablet:h-[33.85vw] tablet:rounded-[0.42vw]"></div>
      <form
        onSubmit={formSubmitHandler}
        className=" mt-[max(3rem,12.8vw)] flex flex-col gap-[max(2.5rem,10.66vw)] w-[87.2%] mx-auto mb-[max(14.4375rem,61.6vw)] tablet:mt-[7.81vw] tablet:w-[79.17vw] tablet:gap-[7.8125vw] tablet:mb-[17.3vw]"
      >
        <div className="flex flex-col gap-[max(1.5rem,6.4vw)] tablet:gap-[3.125vw]">
          <div className="flex flex-col gap-[max(1.5rem,6.4vw)] tablet:flex-row tablet:gap-[0] tablet:justify-between">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-[100%] py-[max(1.5rem,6.4vw)] px-[max(2rem,8.533vw)] bg-[#E7E7E6] leading-[1.25em] text-[max(1rem,4.266vw)] outline-none tablet:text-[1.25vw] tablet:w-[48.4%] tablet:h-[5.21vw] tablet:py-[0] tablet:px-[2.08em]"
              placeholder={placeholderText.firstName}
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-[100%] py-[max(1.5rem,6.4vw)] px-[max(2rem,8.533vw)] bg-[#E7E7E6] leading-[1.25em] text-[max(1rem,4.266vw)] outline-none tablet:text-[1.25vw] tablet:w-[48.4%] tablet:h-[5.21vw] tablet:py-[0] tablet:px-[2.08em]"
              placeholder={placeholderText.lastName}
            />
          </div>
          <div className="flex flex-col gap-[max(1.5rem,6.4vw)] tablet:flex-row tablet:gap-[0] tablet:justify-between">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={placeholderText.email}
              className="w-[100%] py-[max(1.5rem,6.4vw)] px-[max(2rem,8.533vw)] bg-[#E7E7E6] leading-[1.25em] text-[max(1rem,4.266vw)] outline-none tablet:text-[1.25vw] tablet:w-[48.4%] tablet:h-[5.21vw] tablet:py-[0] tablet:px-[2.08em]"
            />
            <input
              type="text"
              name="companyName"
              id="companyName"
              className="w-[100%] py-[max(1.5rem,6.4vw)] px-[max(2rem,8.533vw)] bg-[#E7E7E6] leading-[1.25em] text-[max(1rem,4.266vw)] outline-none tablet:text-[1.25vw] tablet:w-[48.4%] tablet:h-[5.21vw] tablet:py-[0] tablet:px-[2.08em]"
              placeholder={placeholderText.companyName}
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="w-[100%] py-[max(1.5rem,6.4vw)] px-[max(2rem,8.533vw)] bg-[#E7E7E6] leading-[1.25em] text-[max(1rem,4.266vw)] outline-none tablet:h-[15.63vw] tablet:text-[1.25vw] tablet:py-[0] tablet:px-[2.08em] tablet:pt-[1.46em]"
            placeholder={placeholderText.message}
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-[61.162%] border text-[max(1rem,4.266vw)] mx-auto flex items-center justify-center py-[max(1rem,1em)] rounded-[max(8.125rem,34.66vw)] leading-[1.4em] font-[500] border-black hover:cursor-pointer hover:text-white hover:bg-black tablet:text-[1.56vw] tablet:leading-[1.07] tablet:w-[19.62%] tablet:py-[1.1vw] tablet:placeholder"
        />
      </form>
    </div>
  );
};
