
import type { Metadata } from "next";
import AuthPage from "@/components/ui/AuthPage";

export const metadata: Metadata = {
  title: "Recuperar senha",
};

export default function ForgotPasswordPage() {
  return (
    <AuthPage
      mode="forgot"
      title="Vamos recuperar seu acesso."
      description="Informe seu e-mail para receber as instruções de recuperação."
    />
  );
}
