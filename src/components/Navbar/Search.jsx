import { CiSearch } from 'react-icons/ci';

const Search = () => {
  return (
    <div className="relative">
      <input
        className="rounded-[10px] bg-gray-2 px-4 py-3 placeholder-gray-4 lg:w-[704px]"
        type="text"
        placeholder="Search Product"
      />
      <button
        type="button"
        className=" rounded-[10px] bg-primary px-3 py-[10px] text-white"
      >
        <CiSearch className="h-6 w-6" />
      </button>
    </div>
  );
};
export default Search;
