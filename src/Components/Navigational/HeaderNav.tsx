import { PrimeIcons } from "primereact/api";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

export const HeaderNav = () => {
  const menuItems: MenuItem[] = [
    {
      label: "Tekong Seafood",
      icon: PrimeIcons.ARROW_DOWN,
      url: "/",
    },
  ];

  return (
    <div className="p-4 m-auto">
      <Menubar
        start={
          <a
            className="m-2 font-mono text-blue-500 hover:font-semibold bg-white p-2 rounded-lg"
            href="/"
          >
            🦀
          </a>
        }
        end={<div />}
        model={menuItems}
        className="p-4"
      />
    </div>
  );
};
