import { memo, ReactNode } from 'react';

import '../styles/content.scss';

interface ContentProps {
  title: string;
  children: ReactNode;
}

function ContentComponent({ title, children }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> { title }</span>
        </span>
      </header>

      <main>
        <div className="movies-list">{ children }</div>
      </main>
    </div>
  );
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.title, nextProps.title);
});
