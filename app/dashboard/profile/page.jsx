import MyProfile from "@/components/traders_comp/profile/MyProfile";

// add title in metadata
export const metadata = {
  title: "Profile - Dashboard",
  description: "Profile page from Dashboard",
};

const ProfilePage = () => {
  return (
    <div>
      <MyProfile />
    </div>
  );
};

export default ProfilePage;
