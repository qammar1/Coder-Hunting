import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, notification, template, users }) {
  return (
    <>
      <h1 className="mx-12">Complex Dashboard</h1>

      {/* {children} */}
      <div className="grid">
        <div>{notification}</div>
        <div className="">{users}</div>
      </div>
      <div>{template}</div>
    </>
  );
}
