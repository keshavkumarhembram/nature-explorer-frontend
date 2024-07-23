import logo from './../assets/brand/logo-green.png';

export default function Footer () {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="footer__logo mb-8">
          <img src={logo} alt="Natours logo" className="mx-auto" />
        </div>
        <ul className="footer__nav flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Download apps</a></li>
          <li><a href="#" className="hover:underline">Become a guide</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
        <p className="footer__copyright">
          &copy; by Keshav Kumar Hembram
        </p>
      </div>
    </footer>
  );
};

