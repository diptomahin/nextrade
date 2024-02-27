import ManageUserBody from "@/components/admins_comp/ManageUserBody";

// add title in metadata
export const metadata = {
  title: "Manage users - Dashboard",
  description: "The Manage Users page on the Dashboard allows administrators to efficiently oversee and control user accounts, permissions, and activities within the system.",
};
const ManageUsers = () => {
  return (
    <ManageUserBody />
  );
};

export default ManageUsers;
