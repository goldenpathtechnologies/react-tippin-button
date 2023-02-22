import { ReactNode } from "react";

type LayoutProps = {
  element: ReactNode;
  props: {
    [key: string]: unknown;
  }
};

export default function Layout({ element, props }: LayoutProps): JSX.Element {
  return (
    // Note: It's regrettable that Gatsby is not a TypeScript-first framework. Examining the source
    //  for the wrapPageElement does not reveal any discernible type information for the
    //  `apiCallbackContext` object denoted by `LayoutProps`.
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...props}>{element}</div>
  );
}
