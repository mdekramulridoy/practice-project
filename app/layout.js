import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // Get the user from the server session
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <div className="navbar bg-green-500">
            <div className="navbar-start">
              <h1 className="btn btn-ghost text-xl">Blog</h1>
            </div>
            <div className="navbar-center lg:flex">
              <ul className="flex gap-3">
                <li>
                  <Link href="/"> Home</Link>
                </li>
                <li>
                  <Link href="/profile"> Profile</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              {user ? (
                // Show logout button if user is logged in
                <Link href="/api/auth/logout"> Logout</Link>
              ) : (
                // Show login button if no user is logged in
                <Link href="/api/auth/login"> Login</Link>
              )}
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
