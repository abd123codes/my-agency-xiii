import { Sect1 } from './sect1/sect1';
import { Sect2 } from './sect2/sect2';
import { Footer } from "../footer/footer";
import './homepage.scss';
import { Header } from '../header/header';

export const HomePage = () => {

    return (
      <div className="homepage">
        <Header />
        <Sect1 />
        <Sect2 />
        <Footer />
      </div>
    );
}