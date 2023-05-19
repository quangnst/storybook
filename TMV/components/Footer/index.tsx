import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="text-center border-t py-8">
        <div className="flex items-center justify-center my-4 underline">
          <Link href="#" className="px-4">
            Twitter
          </Link>
          <Link href="#" className="px-4">
            LinkedIn
          </Link>
          <Link href="#" className="px-4">
            Website
          </Link>
        </div>
      </div>
    </footer>
  );
};
