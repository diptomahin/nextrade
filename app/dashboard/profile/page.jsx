import Profile from "./Profile";

// add title in metadata
export const metadata = {
  title: "Profile - Dashboard",
  description: "Profile page from Dashboard",
};

const ProfilePage = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfilePage;
