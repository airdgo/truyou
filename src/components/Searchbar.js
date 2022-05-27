import { SearchIcon } from "../Icons/NavbarIcons/SearchIcon";

export const SearchBar = () => {
	return (
		<form className="relative w-full max-w-md">
			<input
				type="text"
				placeholder="Search by date, post's or whatever you want..."
				className="focus:shadow-outline w-full appearance-none rounded-full bg-primaryLight py-4 pl-12
							 font-search text-[10px] text-white placeholder-white outline-none focus:outline-none"
			/>
			<SearchIcon className="absolute top-3 left-4" />
		</form>
	);
};
