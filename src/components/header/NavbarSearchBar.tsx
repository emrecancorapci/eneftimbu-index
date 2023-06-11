export interface NavbarSearchBarProperties {
  text: string;
}

/**
 * Navbar Search Bar component
 * @description Search bar component for the navbar
 * @param {string} text - The text to be displayed in the search bar
 * @returns {React.JSX.Element}
 */
// TODO: Add functionality to the search bar

export default function NavbarSearchBar({ text = '' }: NavbarSearchBarProperties): React.JSX.Element {
  return (
    <div className="flex justify-center items-center w-full px-6 pe-5">
      <form className="flex justify-center items-center w-full">
        <img src="/icon/search-icon.png" className="w-6 h-6" style={{ marginRight: '-2.4rem' }} alt="" />
        <input
          type="text"
          className="h-12 w-full xl:max-w-md lg:w-full bg-white bg-opacity-5 border-none border-0 rounded-lg text-white font-extralight text-base leading-6 ps-12 pe-3"
          placeholder={text}
          required
        />
      </form>
    </div>
  );
}
