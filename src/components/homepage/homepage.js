import { Sect1 } from './sect1/sect1';
import { Sect2 } from './sect2/sect2';
import './homepage.scss';

export const HomePage = () => {

    return (
      <div className='homepage'>
        <Sect1 />
        <Sect2 />
      </div>
    );
}