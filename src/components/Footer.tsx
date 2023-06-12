import { useStore } from '@nanostores/react';
import { $lang } from '../stores/localizationStore.ts';

/**
 * Footer Component
 * @returns {React.JSX.Element}
 */
export default function Footer(): React.JSX.Element {
  const twitterIcon = '/icon/twitter-icon.png';
  const instagramIcon = '/icon/instagram-icon.png';
  const linkedinIcon = '/icon/linkedin-icon.png';

  const { footer } = useStore($lang);

  return (
    <footer className="flex flex-col justify-center w-screen bg-black bg-opacity-20 backdrop-blur-sm py-8 gap-4">
      <p className="text-white text-center px-4">{footer.followUs}</p>
      <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-4">
        <div>
          <form className="flex flex-row align-items-center w-auto lg:w-1/6">
            <input
              className="rounded-lg max-w-md h-10 ps-4"
              style={{ minWidth: '360px' }}
              type="email"
              placeholder={footer.email}
              required
            />
            <button
              className="bg-white fw-bold border-0 text-teal-700 font-bold relative"
              // style={{ marginLeft: '-4rem' }}
              style={{ left: '-4rem' }}
              type="submit"
            >
              {footer.send}
            </button>
          </form>
        </div>
        <div className="flex flex-row items-center justify-evenly w-auto gap-6">
          <a href="https://www.linkedin.com/company/eneftimbu/">
            <img src={linkedinIcon} alt="LinkedIn" className="h-6" />
          </a>
          <a href="https://www.instagram.com/eneftimbu/">
            <img src={instagramIcon} alt="Instagram" className="h-6" />
          </a>
          <a href="/">
            <img src={twitterIcon} alt="Twitter" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
