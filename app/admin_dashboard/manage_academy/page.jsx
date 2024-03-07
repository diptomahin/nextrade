import ManageAcademy from "./ManageAcademy";

// add title in metadata
export const metadata = {
  title: "Manage Academy - NexTrade",
  description: "Manage Academy page from Nextrade",
};

const page = () => {
  return (
    <div>
      <ManageAcademy/>
    </div>
  );
};

export default page;