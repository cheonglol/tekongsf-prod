import { Link } from "react-router-dom";

let pathsJSON: { toPath: string; iconImageURL?: string }[] = [
  {
    toPath: "/",
  },
  {
    toPath: "/featured",
  },
];

export const FooterNav = (): JSX.Element => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-950 shadow-md">
      <div className="flex justify-around py-4">
        {pathsJSON.map((element, index) => {
          return (
            <div className="text-center">
              <Link to={element.toPath} />
              <img
                src={element.iconImageURL}
                alt={`icon-${index}`}
                className="inline-block w-6 h-6"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNav;
