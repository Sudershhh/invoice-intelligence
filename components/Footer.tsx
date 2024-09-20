export default function Footer() {
  return (
    <footer className="bg-[#E29578] py-1 text-center text-white w-full text-sm">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Invoice AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
