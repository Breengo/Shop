import React from "react";
import debounce from "lodash.debounce";
import {
  Select,
  MenuItem,
  InputLabel,
  Slider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useAppDispatch } from "@/redux/store";
import {
  changeFilterOption,
  changeMilleageFilter,
  changePriceFilter,
} from "@/redux/slices/filterSlice";
import {
  AircraftOptions,
  BikeOptions,
  CarOptions,
} from "@/constants/FilterOptions";
import { useRouter } from "next/router";

const selectStyle = {
  color: "white",
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(228, 219, 233, 0.25)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(228, 219, 233, 0.25)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(44, 128, 206, 0.425)",
  },
  ".MuiSvgIcon-root ": {
    fill: "rgba(228, 219, 233, 0.25) !important",
  },
  ".MuiInputLabel": {
    color: "white",
  },
};

function valuetext(value: number) {
  return `${value}$`;
}

let FilterOptions = [
  {
    id: 0,
    label: "Title",
    options: ["Option"],
  },
];

const marks = [
  {
    value: 0,
    label: "0$",
  },

  {
    value: 1000000,
    label: "1 000 000 $",
  },
];

const Filter = () => {
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 1000000]);
  const priceRef = React.useRef<number[]>([0, 1000000]);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const debChangePrice = React.useCallback(
    debounce(() => dispatch(changePriceFilter(priceRef.current)), 300),
    []
  );
  React.useEffect(() => {
    debChangePrice();
  }, [priceRange]);

  if (router.pathname.includes("cars")) {
    FilterOptions = CarOptions;
  }
  if (router.pathname.includes("bikes")) {
    FilterOptions = BikeOptions;
  }
  if (router.pathname.includes("aircrafts")) {
    FilterOptions = AircraftOptions;
  }

  return (
    <div className="flex flex-col border border-neutral-800 rounded-md p-6 w-80 h-fit mr-4">
      <h4 className="text-rose-400 text-3xl uppercase text-center font-bold mb-4">
        Filter
      </h4>
      <FormControl className="flex flex-col gap-8 w-full mt-4">
        {FilterOptions.map((FOption) => {
          return (
            <FormControl className="w-full" key={FOption.id}>
              <InputLabel
                style={{ color: "white" }}
                className="text-white"
                id={"filter_option_label" + FOption.id.toString()}
              >
                {FOption.label}
              </InputLabel>
              <Select
                onChange={(e) => {
                  dispatch(
                    changeFilterOption(`${FOption.label}:${e.target.value}`)
                  );
                }}
                defaultValue={""}
                id={FOption.id.toString()}
                className="w-full"
                labelId={"filter_option_label" + FOption.id.toString()}
                label={FOption.label}
                sx={selectStyle}
              >
                <MenuItem value={""}>
                  <em>None</em>
                </MenuItem>
                {FOption.options.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        })}
        <div className="w-full flex flex-col items-center bg-neutral-800 px-10 py-4 rounded-md">
          <label className="text-center font-bold text-lg text-white">
            Price range
          </label>
          <Slider
            className="mt-2"
            max={1000000}
            getAriaLabel={() => "Temperature range"}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            value={priceRange}
            onChange={(e, newValue) => {
              setPriceRange(newValue as number[]);
              priceRef.current = newValue as number[];
            }}
            marks={marks}
            sx={{
              "	.MuiSlider-markLabel": {
                color: "white",
                fontSize: "10px",
              },
              "	.MuiSlider-track": {
                backgroundColor: "rgb(244 63 94)",
                borderColor: "rgb(224 43 64)  ",
              },
              "	.MuiSlider-thumb": {
                backgroundColor: "rgb(244 63 94)",
                borderColor: "rgb(244 63 94)",
                ":hover": {
                  boxShadow: "none",
                },
              },

              ".Mui-active": {
                backgroundColor: "rgb(244 63 94)",
                borderColor: "rgb(244 63 94)",
                boxShadow: "none",
              },
              "	.MuiSlider-rail": {
                backgroundColor: "rgb(244 63 94)",
                borderColor: "rgb(244 63 94)",
              },
              ".MuiSlider-mark": {
                backgroundColor: "rgb(244 63 94)",
              },
              "	.MuiSlider-dragging": {
                backgroundColor: "rgb(244 63 94)",
                borderColor: "rgb(244 63 94)",
              },
              "	.Mui-focusVisible": {
                boxShadow: "none",
              },
              ".MuiSlider-valueLabelOpen": {
                backgroundColor: "rgb(244 63 94)",
              },
            }}
          />
        </div>
        <div>
          <FormControlLabel
            onChange={() => dispatch(changeMilleageFilter())}
            className="text-white"
            control={<Checkbox defaultChecked />}
            label="With milleage"
            labelPlacement="start"
            sx={{
              ".MuiCheckbox-root": {
                color: "rgb(244 63 94)",
                "&.Mui-checked": {
                  color: "rgb(244 63 94)",
                },
              },
            }}
          />
        </div>
      </FormControl>
    </div>
  );
};

export default Filter;
