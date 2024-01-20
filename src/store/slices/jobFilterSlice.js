import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterTypeData: [
    {
      id: 1,
      type: "Company",
      data: [
        {
          filterId: "C101",
          name: "Amazon",
          checked: false,
        },
        {
          filterId: "C102",
          name: "CVS Health",
          checked: false,
        },
        {
          filterId: "C103",
          name: "Toyota",
          checked: false,
        },
        {
          filterId: "C104",
          name: "Apple",
          checked: false,
        },
      ],
    },
    {
      id: 2,
      type: "Location",
      data: [
        {
          filterId: "L201",
          name: "Mumbai",
          checked: false,
        },
        {
          filterId: "L202",
          name: "Chandigarh",
          checked: false,
        },
        {
          filterId: "L203",
          name: "Pune",
          checked: false,
        },
        {
          filterId: "L204",
          name: "Bangalore",
          checked: false,
        },
      ],
    },
    {
      id: 3,
      type: "Date Posted",
      data: [
        {
          filterId: "D301",
          name: "Last 24 hours",
          checked: false,
        },
        {
          filterId: "D302",
          name: "Last 48 hours",
          checked: false,
        },
        {
          filterId: "D303",
          name: "Last 7 days",
          checked: false,
        },
        {
          filterId: "D304",
          name: "Last 14 days",
          checked: false,
        },
        { filterId: "D305", name: "Last month", checked: false },
      ],
    },
    {
      id: 4,
      type: "Salary Range",
      data: [
        {
          filterId: "S401",
          name: "3 Lakh+",
          checked: false,
        },
        {
          filterId: "S402",
          name: "6 Lakh+",
          checked: false,
        },
        {
          filterId: "S403",
          name: "10 Lakh+",
          checked: false,
        },
        {
          filterId: "S404",
          name: "15 Lakh+",
          checked: false,
        },
        {
          filterId: "S405",
          name: "25 Lakh+",
          checked: false,
        },
      ],
    },
    {
      id: 5,
      type: "Skills",
      data: [
        {
          filterId: "SK501",
          name: "JavaScript",
          checked: false,
        },
        {
          filterId: "SK502",
          name: "Machine Learning",
          checked: false,
        },
        {
          filterId: "SK503",
          name: "JQuery",
          checked: false,
        },
        {
          filterId: "SK504",
          name: "Artificial Intelligence",
          checked: false,
        },
      ],
    },
    {
      id: 6,
      type: "Experience",
      data: [
        {
          filterId: "E601",
          name: "0-2 years",
          checked: false,
        },
        {
          filterId: "E602",
          name: "3-5 years",
          checked: false,
        },
        {
          filterId: "E603",
          name: "5-8 years",
          checked: false,
        },
        {
          filterId: "E604",
          name: "Above 8 years",
          checked: false,
        },
      ],
    },
    {
      id: 7,
      type: "Education",
      data: [
        {
          filterId: "ED701",
          name: "Bachelors",
          checked: false,
        },
        { filterId: "ED702", name: "Masters", checked: false },
        { filterId: "ED703", name: "Phd", checked: false },
        { filterId: "ED704", name: "Diploma", checked: false },
      ],
    },
  ],
  originalData: [],
  filteredData: [],
  searchedValue: "",
};

const jobFilterSlice = createSlice({
  name: "jobFilter",
  initialState,
  reducers: {
    setFilterTypeData(state, action) {
      state.filterTypeData = action?.payload;
    },
    setOriginalData(state, action) {
      state.originalData = action?.payload;
    },
    setFilteredData(state, action) {
      state.filteredData = action?.payload;
    },
    setSearchedValue(state, action) {
      state.searchedValue = action?.payload;
    },
  },
});

export default jobFilterSlice.reducer;
export const filterActions = jobFilterSlice.actions;
