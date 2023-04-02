import { Footer } from "../footer/footer";
import { Header } from '../header/header';
import  { Main }  from './main/main';

export const HomePage = () => {

    return (
      <div className="homepage bg-[color:#D1D4DB] bg-main-bg-img bg-fill w-[max(375px,100%)]">
        <Header />
        <Main />
        <Footer />
      </div>
    );
}