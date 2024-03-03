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
import DashboardButton from "@/components/library/buttons/DashButton";
import DarkButton from "@/components/library/buttons/DarkButton";

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
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
             <p className="dark:text-white">No.</p> 
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
             <p className="dark:text-white">Name</p> 
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              Code
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
             <p className="dark:text-white">Current Value/USD</p> 
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
             <p className="dark:text-white">Option</p> 
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
                <p className="dark:text-white">{idx + 1}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <div className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={asset.icon}
                    alt="coin-icon"
                  />
                  <p className={`dark:text-white`}>{asset.name}</p>
                  <span className="bg-primary/40 dark:bg-sky-100/10 px-1 py-[2px] rounded text-black dark:text-primary text-xs">
                    {asset.key}
                  </span>
                </div>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <p className={`dark:text-white`}>{asset.key}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <p className={` dark:text-white`}>$ {asset.price}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <DarkButton className="font-medium normal-case h-8 2xl:text-sm bg-primary hover:bg-primary border-none text-white">
                  <Link href={`/dashboard/market/${asset.key}`}>Explore</Link>
                </DarkButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NormalCurrencyTable;
