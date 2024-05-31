type PageProps = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
};

const DefaultLayout: React.FC<PageProps> = ({ title, subtitle, children }) => (
  <div>
    <header className="page-header">
      <h1 className="project-name">{title}</h1>
      <h1 className="project-subtitle">{subtitle}</h1>
    </header>
    
    <main id="content" className="main-content">
      {children}
      <hr />
    </main>
  </div>
);

export default DefaultLayout;