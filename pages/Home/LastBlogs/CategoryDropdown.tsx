import * as React from "react";
import { Dropdown, DropdownItemProps } from "semantic-ui-react";
import { ArrowDropDown } from "@material-ui/icons";
import { Props } from "../../../@types/interfaces/PageInterfaces/Categories/categorydropdown.interfaces";

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
    },
    {
      key: 5,
      text: "Teknoloji",
      value: "teknoloji",
      active: activeItem === "technology",
      onClick: () => setActiveItem("technology")
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
