import { Header } from './../header/header';
import { Footer } from './../footer/footer';
import { Main } from './main/main';

export const Contact = () =>{
    return (
      <div className="bg-[url('/src/assets/images/background.png')] bg-contain bg-no-repeat bg-[color:#D1D4DB] bg-[rotate-90] w-[max(375px,100%)]">
        <Header />
        <Main />
        <Footer />
      </div>
    );
}