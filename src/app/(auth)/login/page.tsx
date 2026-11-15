
import type { Metadata } from "next";
import AuthPage from "@/components/ui/AuthPage";

export const metadata: Metadata = {
  title: "Entrar",
};

export default function LoginPage() {
  return (
    <AuthPage
      mode="login"
      title="Que bom ter você de volta!"
      description="Entre na sua conta para continuar sua jornada com o PetHelp."
    />
  );
}
