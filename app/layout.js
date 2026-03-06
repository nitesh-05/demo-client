import "./globals.css";

export const metadata = {
  title: "Client Demo UI",
  description: "Demo UIs for clients",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100 p-2 text-center">
        <h1 className="text-3xl font-bold mb-10">
          Nitesh Kumar - Demo Projects
        </h1>
        {children}
      </body>
    </html>
  );
}
