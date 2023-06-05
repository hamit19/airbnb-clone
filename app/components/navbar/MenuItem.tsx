"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className='p-2 transition-all select-none cursor-pointer rounded-xl hover:bg-slate-100 '
    >
      <span>{label}</span>
    </div>
  );
};

export default MenuItem;
