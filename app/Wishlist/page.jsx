import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Wishlist from "@/components/Wishlist";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/Login");

  return <Wishlist />;
}
