const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{' '}
          <a
            href="https://github.com/davinicollas"
            target="_blank"
            rel="noreferrer"
          >
            Davi nicollas de Paula Periceles
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{' '}
            <a
              href="https://instagram.com/davinicollass"
              target="_blank"
              rel="noreferrer"
            >
              @davinicollass
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
