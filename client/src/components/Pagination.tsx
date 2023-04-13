import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

export default function PaginationElement() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    const url = window.location.href;
    const urlPageId = url.slice(url.lastIndexOf("/") + 1);
    setCurrentPage(Number(urlPageId));
  }, []);
  const onChangePage = (page: number) => {
    const url = window.location.href;
    let urlPage = url.slice(0, url.lastIndexOf("/"));
    urlPage = urlPage.slice(urlPage.lastIndexOf("/") + 1);
    router.push(`/${urlPage}/${page}`);
    setCurrentPage(page);
  };
  return (
    <Stack className="flex items-center mt-8" spacing={2}>
      <Pagination
        page={currentPage}
        onChange={(e, page) => onChangePage(page)}
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
