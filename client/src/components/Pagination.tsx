import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationElement() {
  return (
    <Stack className="flex items-center mt-8" spacing={2}>
      <Pagination
        size="large"
        count={10}
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "rgb(115 115 115)",
            borderColor: "rgb(115 115 115)",
            ":hover": { backgroundColor: "rgb(64 64 64)", color: "white" },
          },

          "& .Mui-selected": {
            backgroundColor: "rgb(244 63 94)",
            color: "white",
            ":hover": { color: "white", backgroundColor: "rgb(244 63 94)" },
            borderColor: "rgb(244 63 94)",
          },
        }}
      />
    </Stack>
  );
}
