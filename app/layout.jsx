import "./globals.css";

export const metadata = {
	title: "Aipro Agency",
	description: "Aipro Agency - Full-Cycle Digital Agency",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className="font-montserrat">{children}</body>
		</html>
	);
}
