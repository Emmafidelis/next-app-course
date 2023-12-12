import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import dog from "@/public/images/dog.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        alt="dog"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        quality={100}
        priority
      />
    </main>
  );
}
