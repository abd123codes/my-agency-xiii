import { Footer } from "../footer/footer";
import { Header } from '../header/header';
import { Main } from './main/main';

export const HomePage = () => {

    return (
      <div className="homepage">
        <Header />
        <Main />
        <Footer />
      </div>
    );
}