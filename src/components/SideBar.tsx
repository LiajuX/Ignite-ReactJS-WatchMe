import { ReactNode } from 'react';

import '../styles/sidebar.scss';

interface SideBarProps {
  children: ReactNode;
}

export function SideBar({ children }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">{ children }</div>
    </nav>
  );
}