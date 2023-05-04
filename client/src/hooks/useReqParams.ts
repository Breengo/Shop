import { IFilterState } from "@/redux/slices/filterSlice";

const useReqParams = (filterOptions: IFilterState) => {
  let reqParams = "";
  reqParams += `?bottomPrice=${filterOptions.bottomPrice}&&upperPrice=${filterOptions.upperPrice}`;
  filterOptions.options.forEach((option, index) => {
    let optionName = option.split(":")[0];
    let optionValue = option.split(":")[1];
    reqParams += `&&${optionName}=${optionValue}`;
  });
  if (!filterOptions.milleage) {
    reqParams += `&&milleage=false`;
  }
  return reqParams;
};

export default useReqParams;
