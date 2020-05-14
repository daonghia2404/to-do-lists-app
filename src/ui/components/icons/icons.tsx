import React from "react";

import iconTrash from "assets/icons/trash.svg";
import iconCheck from "assets/icons/check.svg";
import iconCheckChecked from "assets/icons/check-checked.svg";
import iconAdd from "assets/icons/add.svg";

interface IconType {
  className?: string;
  onClick?: Function;
  white?: boolean;
}

export const TrashIcon = ({ className }: IconType): React.ReactElement => (
  <img src={iconTrash} className={className} alt="" />
);

export const CheckIcon = ({ className }: IconType): React.ReactElement => (
  <img src={iconCheck} className={className} alt="" />
);

export const CheckedIcon = ({ className }: IconType): React.ReactElement => (
  <img src={iconCheckChecked} className={className} alt="" />
);

export const AddIcon = ({ className }: IconType): React.ReactElement => (
  <img src={iconAdd} className={className} alt="" />
);
