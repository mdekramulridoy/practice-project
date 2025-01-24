import { redirect } from "next/navigation"; // For redirecting unauthenticated users
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"; // Kinde session

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // If no user is logged in, redirect them to the login page
  if (!user) {
    redirect("/api/auth/login");
  }

  // Render the profile page for logged-in users
  return (
    <div className="text-center py-6">
      <h1 className="text-2xl font-bold">Welcome to profile page!</h1>
    </div>
  );
}
