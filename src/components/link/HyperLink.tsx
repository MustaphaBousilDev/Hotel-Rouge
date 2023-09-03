import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  href: LinkProps['href'];
  className?: string;
}

const HyperLink: FC<Props> = ({ children, href, className }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};
export default HyperLink;
