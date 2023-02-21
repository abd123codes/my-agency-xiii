
export const Main = () => {

  const formSubmitHandler = (e) =>{
    e.preventDefault();
    const [firstName, lastName, email, companyName, message, ...prev ] = e.target.elements
    console.log(
      firstName.value,
      lastName.value,
      email.value,
      companyName.value,
      message.value,
    );

    // Email.send({
    //   Host: "smtp.mailtrap.io",
    //   Username: "<Mailtrap username>",
    //   Password: "<Mailtrap password>",
    //   To: "recipient@example.com",
    //   From: "sender@example.com",
    //   Subject: "Test email",
    //   Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>",
    // }).then((message) => alert(message));
  }

  return (
    <div
      className="min-w-[max(375px,100%)]"
    >
      <div className="mt-[max(6.25rem,26.6vw)] w-[87.2%] mx-auto flex flex-col gap-[max(2rem,8.533vw)] font-[Inter,sans-serif] ">
        <div className="flex flex-col gap-[max(0.125rem,0.533vw)] w-[57.49%]">
          <div className="font-[700] text-[max(1.25rem,5.333vw)] leading-[1em] text-[#015450]">
            XII
          </div>
          <div className="font-[900] text-[max(2.13rem,9vw)] leading-[1.25em]">
            Let's Talk
          </div>
        </div>
        <div className=" font-[400] text-[max(1.05rem,4.5vw)] leading-[1.625em]">
          Every great relationship starts with a conversation. Whether you have
          detailed questions or just want to talk shop, we’d love to hear from
          you.
        </div>
      </div>
      <div className=" w-[87.2%] h-[max(13.4375rem,57.33vw)] mx-auto mt-[max(2.5625rem,10.93vw)] rounded-[max(0.5rem,2.133vw)]"></div>
      <form
        onSubmit={formSubmitHandler}
        className=" mt-[max(3rem,12.8vw)] flex flex-col gap-[max(2.5rem,10.66vw)] w-[87.2%] mx-auto mb-[max(14.4375rem,61.6vw)]"
      >
        <div className="flex flex-col gap-[max(1.5rem,6.4vw)]">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-[100%] py-[max(1.5rem,6.4vw)] px-[max(2rem,8.533vw)] bg-[#E7E7E6] leading-[1.25em] text-[max(1rem,4.266vw)] outline-none"
            placeholder="First name"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-[100%] py-[max(1.5rem,6.4vw)] px-[max(2rem,8.533vw)] bg-[#E7E7E6] leading-[1.25em] text-[max(1rem,4.266vw)] outline-none"
            placeholder="Last name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-[100%] py-[max(1.5rem,6.4vw)] px-[max(2rem,8.533vw)] bg-[#E7E7E6] leading-[1.25em] text-[max(1rem,4.266vw)] outline-none"
          />
          <input
            type="text"
            name="companyName"
            id="companyName"
            className="w-[100%] py-[max(1.5rem,6.4vw)] px-[max(2rem,8.533vw)] bg-[#E7E7E6] leading-[1.25em] text-[max(1rem,4.266vw)] outline-none"
            placeholder="Company name"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="w-[100%] py-[max(1.5rem,6.4vw)] px-[max(2rem,8.533vw)] bg-[#E7E7E6] leading-[1.25em] text-[max(1rem,4.266vw)] outline-none"
            placeholder="Message"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-[61.162%] border text-[max(1rem,4.266vw)] mx-auto flex items-center justify-center py-[max(1rem,4.266vw)] rounded-[max(8.125rem,34.66vw)] leading-[1.4em] font-[500] border-black hover:cursor-pointer hover:text-white hover:bg-black"
        />
      </form>
    </div>
  );
};
