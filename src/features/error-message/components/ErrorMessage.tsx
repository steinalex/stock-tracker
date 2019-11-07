import React, { FC } from "react";

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <>{message}</>;
};
