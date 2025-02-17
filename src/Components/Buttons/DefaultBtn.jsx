import React from "react";
import { Link } from "react-router";

const DefaultBtn = ({ label, to, className = "block" }) => {
  return (
    <Link to={to} className={className} label={label}>
      {label}
    </Link>
  );
};

export default DefaultBtn;
