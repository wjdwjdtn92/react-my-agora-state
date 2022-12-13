export default function PageNation({ listCount, currentPage, setPage }) {
  const ITEM_SHOW_LIMIT = 10;
  const PAGENATION_SHOW_LIMIT = 5;
  currentPage = Number(currentPage);

  const pageCount = Math.ceil(listCount / ITEM_SHOW_LIMIT);
  const divPageNum = currentPage % PAGENATION_SHOW_LIMIT;
  const addNum = divPageNum === 0 ? -PAGENATION_SHOW_LIMIT + 1 : 1;

  const displayStartPageNum = currentPage - divPageNum + addNum;
  let displayEndPageNum = displayStartPageNum + PAGENATION_SHOW_LIMIT - 1;

  if (displayEndPageNum > pageCount) {
    displayEndPageNum = pageCount;
  }

  const list = Array.from(
    { length: displayEndPageNum - displayStartPageNum + 1 },
    (_, i) => i + displayStartPageNum
  );

  const nextOnClick = () => {
    if (currentPage + 1 > pageCount) {
      return;
    }

    setPage(currentPage + 1);
  };

  const preOnClick = () => {
    if (currentPage - 1 === 0) {
      return;
    }

    setPage(currentPage - 1);
  };

  const onClick = (e) => {
    setPage(e.target.id);
  };

  return (
    <nav id="pagination-container">
      <a
        href="#"
        className="pagination-button"
        id="prev-button"
        onClick={preOnClick}
      >
        &laquo;
      </a>
      <div id="pagination-numbers">
        {list.map((i) =>
          Number(currentPage) === Number(i) ? (
            <a href="#" id={i} className="active" onClick={onClick}>
              {i}
            </a>
          ) : (
            <a href="#" id={i} onClick={onClick}>
              {i}
            </a>
          )
        )}
      </div>
      <a
        href="#"
        className="pagination-button"
        id="next-button"
        onClick={nextOnClick}
      >
        &raquo;
      </a>
    </nav>
  );
}
