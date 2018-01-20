import Link from 'next/link'

const About = () => (
  <div>
    <ul>
      <li><Link href='/'><a>Home</a></Link></li>
      <li><Link href='/about'><a>About</a></Link></li>
    </ul>
    <div>About BitzPrice</div>
    <p>Application to view Bitcoin prices</p>
  </div>
);

export default About;