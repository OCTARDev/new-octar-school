

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(currentPage - i) <= 1) {
        buttons.push(
          <button
            key={i}
            className={`px-3 py-2 rounded ${
              currentPage === i
                ? "bg-primaryA1 text-white"
                : " text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      } else if (
        i === currentPage - 2 ||
        i === currentPage + 2 ||
        (i === 2 && currentPage > 4) ||
        (i === totalPages - 1 && currentPage < totalPages - 3)
      ) {
        buttons.push(
          <span key={i} className="px-3 py-2 text-gray-400">
            ...
          </span>
        );
      }
    }
    return buttons;
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        className="px-3 py-2 rounded bg-white text-gray-700 hover:bg-gray-200"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        «
      </button>
      <button
        className="px-3 py-2 rounded bg-white text-gray-700 hover:bg-gray-200"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </button>
      {getPageButtons()}
      <button
        className="px-3 py-2 rounded bg-white text-gray-700 hover:bg-gray-200"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </button>
      <button
        className="px-3 py-2 rounded bg-white text-gray-700 hover:bg-gray-200"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
