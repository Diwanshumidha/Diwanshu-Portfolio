
import React, { Children } from "react";
import { usePathname } from "next/navigation";
import {cn} from "@/lib/utils";
import Link, { LinkProps } from "next/link";

type NavLinkProps = React.PropsWithChildren<LinkProps> & {
  activeClassName?: string,
  className?:string;
};

export const NavLink = ({
  children,
  className:classn,
  activeClassName = "active",
  ...props
}: NavLinkProps) => {

  const path = usePathname();

  const isActive = path === props.href || path === props.as;

  const className = cn(classn, {[activeClassName]: isActive });

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};