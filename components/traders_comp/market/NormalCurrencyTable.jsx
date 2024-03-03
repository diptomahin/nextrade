import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/library/Button";

const NormalCurrencyTable = ({ assets }) => {
  return (
    <TableContainer
      sx={{
        boxShadow: "none",
        bgcolor: "transparent",
      }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead className="mx-auto">
          <TableRow className="text-center">
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              No.
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              Code
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              Current Value/USD
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              Option
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset, idx) => (
            <TableRow
              key={asset.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ borderBottom: "none" }}
                component="th"
                scope="row"
              >
                <p className="text-white">{idx + 1}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <div className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={asset.icon}
                    alt="coin-icon"
                  />
                  <p className={`text-white`}>{asset.name}</p>
                  <span className="bg-sky-100/15 px-1 py-[2px] rounded text-primary text-xs">
                    {asset.key}
                  </span>
                </div>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <p className={`text-white`}>{asset.key}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <p className={` text-white`}>$ {asset.price}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <Button className="font-medium normal-case h-8 2xl:text-sm bg-primary hover:bg-primary border-none text-white">
                  <Link href={`/dashboard/market/${asset.key}`}>Explore</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NormalCurrencyTable;
