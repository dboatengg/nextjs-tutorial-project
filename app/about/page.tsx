// // export default function About() {
// //   return (
// //     <main>
// //       <h1>About Page</h1>
// //       <p>This is the About page.</p>
// //     </main>
// //   );
// // }

// /*=========================Update 1==================================*/

// import Link from "next/link"; // New import for navigation

// export default function About() {
//   return (
//     <main>
//       <h1>About This App</h1>
//       <p>This page lives at /about.</p>

//         {/* New: Link back to the Home page */}
//       <p>
//         <Link href="/">Back to Home</Link>
//       </p>
//     </main>
//   );
// }

/*=========================Update 2==================================*/

// import Link from "next/link";
// import Image from "next/image";

// export default function About() {
//   return (
//     <main>
//       <h1 className="text-2xl font-semibold mb-4">About This App</h1>

//       <Image
//         src="/test-image.webp"
//         alt="About page image"
//         width={500}
//         height={350}
//         className="rounded-lg shadow-md mb-4"
//       />

//       <p>This page lives at /about.</p>

//       <p className="mt-4">
//         <Link href="/" className="text-blue-600 hover:text-blue-800">
//           Back to Home
//         </Link>
//       </p>
//     </main>
//   );
// }

/*=========================Update 3==================================*/
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-start justify-center min-h-[80vh] space-y-6">
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
        <Image
          src="/test-image.webp"
          alt="Test Image illustration"
          width={400}
          height={400}
          className="rounded-lg shadow-md mb-4"
        />

        <div>
          <h1 className="text-2xl font-semibold mb-4">About This App</h1>
          <p>
            This Next.js project teaches you how to work with the Nextjs core
            concepts to build a fully functional Movie Browsing Application.
          </p>
        </div>
      </div>
    </main>
  );
}
