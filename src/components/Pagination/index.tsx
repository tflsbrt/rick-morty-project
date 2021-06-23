import './styles.css'

interface Props {
  limit: number;
  pages: number;
  offset: number;
  setOffset(string: any): void;
}

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination: React.FC<Props> = ({ limit, pages, offset, setOffset }) => {
  const current = offset ? offset : 1;
  const pagesNumber = pages;
  const first = Math.max(current - MAX_LEFT, 1);

  return (
    <ul className="pagination"
    >
      {Array.from({ length: Math.min(MAX_ITEMS, pagesNumber) })
        .map((_, index) => index + first)
        .map((page) => {
          if (page <= pagesNumber) return (
            <li key={page}>
              <button
                onClick={() => setOffset((page ) * limit)}
                className={page === current ? "pagination-active" : "normal-pagination"}
              >
                {page}
              </button>
            </li>
          )
        })}
    </ul>
  );
};

export default Pagination;
