"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function ModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={(open) => !open && router.back()}>
      <DialogContent className="sm:max-w-sm">{children}</DialogContent>
    </Dialog>
  );
}
