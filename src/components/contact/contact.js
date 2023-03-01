import { Header } from "../header/header";
import { Footer } from "./../footer/footer";
import { Main } from "./main/main";

export const Contact = () => {
  return (
      <div className="bg-main-bg-img bg-cover bg-repeat bg-[color:#D1D4DB] w-[max(375px,100%)]">
        <Header />
        <Main />
        <Footer />
      </div>
  );
};
