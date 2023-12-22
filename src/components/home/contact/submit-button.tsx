"use client";

import MessagesIcon from "@/assets/icons/messages";
import Button from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-max mt-4">
      <MessagesIcon /> Wyślij wiadomość
    </Button>
  );
}
