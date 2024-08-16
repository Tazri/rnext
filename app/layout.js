import { Inter } from "next/font/google";
import "./globals.css";
import getDocument from "@/lib/doc";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Docucraft",
  description: "Documentaiton website by protocol.",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocument();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full lg:ml-72 xl:ml-80">
          <Header docs={allDocuments} />
          <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
            <main className="flex-auto py-12">
              {/* <!-- Green Top Overlay --> */}
              <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                <div className="absolute left-1/2 top-0 ml-[-38rem] h-full w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f00] to-[#daff7574] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] h-full min-h-screen"></div>
                </div>
              </div>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
