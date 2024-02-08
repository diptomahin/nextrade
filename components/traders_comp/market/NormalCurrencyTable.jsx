import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DashboardButton from "@/components/library/buttons/DashButton";

const NormalCurrencyTable = ({ assets }) => {
  return (
    <TableContainer
      className='bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree '
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead className="mx-auto">
          <TableRow className="text-center">
            <TableCell sx={{ fontWeight: 700, color: "white" }}>No.</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "white" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "white" }}>Code</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "white" }}>Current Value/USD</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "white" }}>Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset, idx) => (
            <TableRow
              key={asset.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ borderBottom: "1px solid #2c3750" }} component="th" scope="row">
                <p className="text-white">{idx + 1}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                <div className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={asset.icon}
                    alt="coin-icon"
                  />
                  <p className={`text-white`}>{asset.name}</p>
                  <span className="bg-sky-100/15 px-1 py-[2px] rounded text-primary text-xs">{asset.key.slice(0, -4)}</span>
                </div>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                <p className={`text-white`}>{asset.key.slice(0, -4)}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                <p className={` text-white`}>{asset.price}<span className="text-[8px]">  {asset.key.slice(0, -4)}</span></p>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                <DashboardButton
                  className="font-semibold normal-case"
                >
                  <Link href={`/dashboard/market/${asset.key.slice(0, -4)}`}>
                    Explore
                  </Link>
                </DashboardButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NormalCurrencyTable;