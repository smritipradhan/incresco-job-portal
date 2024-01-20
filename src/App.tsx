import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import FilterBySidebar from "./components/FilterBySidebar";
import Headers from "./components/Header";
import SearchResultsMainContainer from "./components/SearchResultsMainContainer";
import { filterActions } from "./store/slices/jobFilterSlice";
import { getData } from "./utils/apiUtils";

const App = () => {
  const dipatch = useDispatch();

  const handleAPI = async () => {
    const jobData: any = await getData("");
    dipatch(filterActions.setOriginalData(jobData?.data?.data?.jobs));
  };

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <main className="h-screen overflow-hidden">
        <Headers />
        <div className="bg-[#171C28] flex p-11 gap-9 justify-center h-screen  ">
          <FilterBySidebar />
          <SearchResultsMainContainer />
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default App;
