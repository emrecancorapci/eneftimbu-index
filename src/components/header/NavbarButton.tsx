// import styled from 'styled-components';

// const NavButton = styled.button`
//   height: 48px;
//   width: 100%;
//   --bs-btn-color: rgb(255, 255, 255) !important;
//   --bs-btn-bg: rgba(255, 255, 255, 0) !important;
//   --bs-btn-border-width: 0px !important;
//   --bs-btn-hover-color: white !important;
//   --bs-btn-hover-bg: rgba(0, 0, 0, 0.3) !important;
// `;

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
