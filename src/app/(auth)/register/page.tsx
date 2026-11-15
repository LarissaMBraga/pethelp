
import type { Metadata } from "next";
import AuthPage from "@/components/ui/AuthPage";

export const metadata: Metadata = {
  title: "Criar conta",
};

export default function RegisterPage() {
  return (
    <AuthPage
      mode="register"
      title="Faça parte dessa história."
      description="Crie sua conta e encontre novas formas de ajudar os animais."
    />
  );
}
