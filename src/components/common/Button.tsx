interface Props {
  type?: null | 'primary' | 'secondary' | 'link' | 'active' | 'disabled';
  size?: null | 'sm' | 'lg' | 'link';
  textSize?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const typeSelector: (type: Props['type']) => string = (type: Props['type']) => {
  switch (type) {
    case 'primary': {
      return 'text-primary-dark bg-white border-0 hover:bg-primary-dark hover:text-white';
    }
    case 'secondary': {
      return 'text-white bg-primary border border-primary bg-opacity-5 hover:bg-opacity-10';
    }
    case 'link': {
      return 'text-white bg-black border-0 bg-opacity-0 hover:bg-opacity-30';
    }
    case 'active': {
      return 'text-white bg-primary border-0 hover:bg-primary hover:text-white';
    }
    case 'disabled': {
      return 'text-white bg-natural-400 border-0 cursor-not-allowed';
    }
    default: {
      return 'text-white bg-natural-900 border-0 hover:bg-white hover:natural-900';
    }
  }
};

const sizeSelector: (size: Props['size']) => string = (size: Props['size']) => {
  switch (size) {
    case 'sm': {
      return 'px-4 py-2 h-8';
    }
    case 'lg': {
      return 'px-6 h-14';
    }
    case 'link': {
      return 'px-5 h-12';
    }
    default: {
      return 'px-5 h-10';
    }
  }
};

export default function Button({
  type,
  size,
  textSize = 'md',
  weight = 'bold',
  onClick,
  className = '',
  children,
}: Props): JSX.Element {
  const typeClass = typeSelector(type);
  const sizeClass = sizeSelector(size);
  const textClass = `text-${textSize} font-${weight}`;
  return (
    <button
      className={`${textClass} w-full max-w-sm rounded-lg text-center font-bold transition-colors ${textClass} ${typeClass} ${sizeClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
