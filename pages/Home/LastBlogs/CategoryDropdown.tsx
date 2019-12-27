import * as React from "react";
import { Dropdown, DropdownItemProps } from "semantic-ui-react";
import { ArrowDropDown } from "@material-ui/icons";

type Props = {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
};

const CategoryDropdown: React.FC<Props> = ({ activeItem, setActiveItem }) => {
  const options: DropdownItemProps[] = [
    {
      key: 1,
      text: "Php",
      value: "php",
      active: activeItem === "php",
      onClick: () => setActiveItem("php")
    },
    {
      key: 2,
      text: "Python",
      value: "python",
      active: activeItem === "python",
      onClick: () => setActiveItem("python")
    },
    {
      key: 3,
      text: "Html",
      value: "html",
      active: activeItem === "html",
      onClick: () => setActiveItem("html")
    },
    {
      key: 4,
      text: "C#",
      value: "C#",
      active: activeItem === "csharp",
      onClick: () => setActiveItem("csharp")
    }
  ];

  return (
    <Dropdown
      className="item"
      text="Diğer"
      icon={<ArrowDropDown />}
      options={options}
      simple
      item
    />
  );
};

export default CategoryDropdown;
