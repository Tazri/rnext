import React from "react";

export default function Field({ label, children, htmlFor, error }) {
  console.log(error);
  const id = htmlFor || getChild(children);
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="auth-label">
          {label}
        </label>
      )}
      {children}
      {!!error && <div className="text-red-600">{error.message}</div>}
    </div>
  );
}

function getChild(children) {
  const child = React.Children.only(children);

  // eslint-disable-next-line no-unsafe-optional-chaining
  if ("id" in child?.props) {
    return child.props.id;
  }
}
