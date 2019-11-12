import React, { FC } from "react";

type SearchStateProps = {
  message: string;
};

export const SearchState: FC<SearchStateProps> = ({ message }) => (
  <tr>
    <td>
      <span className="company-name__dropdown">{message}</span>
    </td>
  </tr>
);
