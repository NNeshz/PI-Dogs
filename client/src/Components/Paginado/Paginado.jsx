/* eslint-disable jsx-a11y/anchor-is-valid */
import './Paginado.css'

function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav className="containerPaginado">
      <ul className="paginado">
        {pageNumbers && pageNumbers.map((n) => (
            <li className="number" key={n}>
              <a onClick={() => paginado(n)}>{n}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Paginado;
