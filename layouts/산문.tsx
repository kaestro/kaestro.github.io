type PageProps = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
};

const 산문: React.FC<PageProps> = ({ title, subtitle, children }) => (
  <div>
    <header className="page-header">
      <h1 className="project-name">{title}</h1>
      <h1 className="project-subtitle">{subtitle}</h1>
      {/* Add your download buttons here if needed */}
    </header>
    <div className="flex justify-between">
      {/* Add your category list here */}
      <main id="content" className="main-content" style={{ textIndent: '0.7em' }}>
        {children}
        <hr />
      </main>
    </div>
  </div>
);

export default 산문;