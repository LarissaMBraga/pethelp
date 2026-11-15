
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PetHelp | Adoção responsável",
    template: "%s | PetHelp",
  },
  description:
    "Encontre seu novo melhor amigo. O PetHelp conecta animais que precisam de um lar a pessoas dispostas a transformar suas vidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
