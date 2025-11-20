// import Link from "next/link";

// export default function About() {
//   return (
//     <main>
//       <h1>About This App</h1>
//       <p>This page lives at /about.</p>

//       <p>
//         <Link href="/">Back to Home</Link>
//       </p>
//     </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">About This App</h1>

      <Image
        src="/test.png"
        alt="Laptop illustration"
        width={500}
        height={350}
        className="rounded-lg shadow-md mb-4"
      />

      <p>This page lives at /about.</p>

      <p className="mt-4">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Back to Home
        </Link>
      </p>
    </main>
  );
}
