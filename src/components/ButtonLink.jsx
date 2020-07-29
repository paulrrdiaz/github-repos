import React from "react";
import Link from "next/link";

const TYPES = {
  primary: "is-primary",
  dark: "is-dark",
};

const ButtonLink = ({
  href,
  children,
  type = "primary",
  external,
  ...otherProps
}) => {
  const classes = `button ${TYPES[type]}`;

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" {...otherProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={classes} {...otherProps}>
        {children}
      </a>
    </Link>
  );
};

export default ButtonLink;
