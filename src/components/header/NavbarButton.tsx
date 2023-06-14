export interface NavbarButtonProperties {
  path: string;
  text: string;
}

/**
 * NavbarButton component
 * @description This component renders a button for the Navbar component.
 * @param {string} path - The path to be redirected to when the button is clicked
 * @param {string} text - The text to be displayed in the button
 * @returns {React.JSX.Element}
 */
export default function NavbarButton({
  path,
  text,
}: NavbarButtonProperties): React.FunctionComponentElement<NavbarButtonProperties> {
  return (
    <a className="p-0" href={path}>
      <button
        type="button"
        className="fw-bold h-12 w-full text-white font-bold bg-black bg-opacity-0 px-4 rounded-lg border-0 hover:bg-opacity-30"
      >
        {text}
      </button>
    </a>
  );
}
