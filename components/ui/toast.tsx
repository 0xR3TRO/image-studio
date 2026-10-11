/**
 * VisionForge AI — Toast Notifications
 * @author 0xR3TRO (https://github.com/0xR3TRO)
 * @copyright 2026 0xR3TRO
 * @license AGPL-3.0-or-later
 */
"use client";

import { Toaster as SonnerToaster, toast } from "sonner";

export function ToastProvider() {
    return (
        <SonnerToaster
            position="bottom-right"
            toastOptions={{
                className:
                    "!bg-surface-900 !border-surface-800 !text-white !shadow-xl",
                descriptionClassName: "!text-surface-400",
                duration: 4000,
            }}
            theme="dark"
            richColors
            closeButton
        />
    );
}

export { toast };
