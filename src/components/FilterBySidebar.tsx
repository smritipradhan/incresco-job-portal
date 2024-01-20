import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import FilterComponent from "../common/FilterComponent";
import useCheckboxChangeHandler from "./hooks/useCheckboxChangeHandler";
import useFilterChangeHandler from "./hooks/useFilterChangeHandler";

const FilterBySidebar = () => {
  const { filterTypeData } = useSelector((state: any) => state.jobFilter);

  const { handleCheckboxChange, handleFilterClear } =
    useCheckboxChangeHandler();
  useFilterChangeHandler();

  return (
    <div
      className="custom-box-shadow  overflow-hidden overflow-y-scroll"
      style={{ width: "340px", height: "81vh" }}
    >
      <div className="flex justify-between ">
        <Typography className="p-4 text-20 color-EDEDED">Filter by</Typography>
        <Typography
          className="p-4 text-xs color-EDEDED flex my-auto cursor-pointer"
          onClick={handleFilterClear}
        >
          Clear all
        </Typography>
      </div>

      <div className="border-b-2 border-gray-700"></div>
      {Array.isArray(filterTypeData) &&
        filterTypeData?.map((data) => {
          return (
            <FilterComponent
              key={`${data.id}-${data.type}`}
              companyData={data}
              onChangeHandler={handleCheckboxChange}
            />
          );
        })}
    </div>
  );
};

export default FilterBySidebar;
