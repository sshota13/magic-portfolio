import { redirect } from "next/navigation";

export default function Home() {
  // Make /about the default entry point for the site
  redirect("/about");
}
