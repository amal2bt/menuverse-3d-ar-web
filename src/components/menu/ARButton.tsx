import { useState } from "react";
import { QrCode } from "lucide-react";
import ARQRCodeModal from "./ARQRCodeModal";
import { buildArUrl } from "./menuModels";

type ARButtonProps = {
  modelId: string;
  label?: string;
  baseUrl?: string;
  className?: string;
};

export default function ARButton({ modelId, label = "View on Table", baseUrl, className }: ARButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        <QrCode size={15} />
        {label}
      </button>
      <ARQRCodeModal
        open={open}
        onClose={() => setOpen(false)}
        url={buildArUrl(modelId, baseUrl)}
        label={modelId}
      />
    </>
  );
}