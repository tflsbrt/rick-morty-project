import './styles.css'

interface Props {
  limit: number;
  total: number;
  offset: number;
  setOffset(string: any): void;
}

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination: React.FC<Props> = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  return (
    <ul className="pagination"
    >
      {Array.from({ length: Math.min(MAX_ITEMS, pages)  })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => setOffset((page ) * limit)}
              className={page === current ? "pagination-active" : "normal-pagination"}
            >
              {page}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
