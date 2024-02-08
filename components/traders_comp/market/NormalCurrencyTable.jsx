import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DashboardButton from "@/components/library/buttons/DashButton";

const NormalCurrencyTable = ({assets}) => {
    return (
        <TableContainer
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead className="mx-auto bg-primary">
                <TableRow className="text-center">
                  <TableCell sx={{ fontWeight: 700, color: "white" }}>No.</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "white" }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "white" }}>Key</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "white" }}>Current value</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "white" }}>Option</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assets.map((asset, idx) => (
                  <TableRow
                    key={asset.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Image
                          width={40}
                          height={40}
                          src={asset.icon}
                          alt="coin-icon"
                        />
                        <p className={`font-semibold`}>{asset.name}</p>
                        <span className="bg-sky-100 px-1 py-[2px] rounded text-primary text-xs">{asset.key.slice(0, -4)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className={` font-semibold`}>{asset.key}</p>
                    </TableCell>
                    <TableCell>
                      <p className={` font-semibold`}>{asset.price}</p>
                    </TableCell>
                    <TableCell>
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