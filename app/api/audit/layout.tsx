
export const metadata = {
  title: "Reale Digital | AI Search & Automation Systems",
  description: "AI Search Optimization and Automation Systems that turn traffic into revenue."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#0B1020", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
