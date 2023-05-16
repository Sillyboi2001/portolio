import Image from 'next/image';
import './page.css';
import Silasmanas from './SILASMANAS.svg';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', width: '100%'}}>
      <nav>
      <Image src={Silasmanas} alt="logo" />
      <div className="position">
      <ul>
        <li><a className="active">HOME</a></li>
        <li><a>SERVICES</a></li>
        <li><a>ABOUT</a></li>
        <li><a>CONTACT</a></li>
        <li><a>SKILLS</a></li>
        <li><a>KNOW MORE</a></li>
      </ul>
      </div>
    </nav>
    <div className="about">
      <p className="hello">Hello</p>
      <p className="silas">I&apos;m Silas Okpugie<br /><span>SOFTWARE DEVELOPER</span></p>
      <p className="experience">Fully proven, located in Lagos, Nigeria</p>
      <p className="experience">BUILDING DIGITAL EXPERIENCE</p>
    </div>
    <div className="button">
      <Button value={'Download CV >'} />
      <Button value={'Hire Me! >'} />
    </div>
    </div>
  )
}
