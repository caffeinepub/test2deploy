import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, MessageSquare, Phone, X } from "lucide-react";

interface ContactMethodModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactMethodModal({
  open,
  onClose,
}: ContactMethodModalProps) {
  const handleSendMessage = () => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        data-ocid="contact_modal.dialog"
        className="sm:max-w-md border-0 shadow-finland-lg p-0 overflow-hidden"
        style={{ borderRadius: "1.25rem" }}
      >
        {/* Header strip */}
        <div className="bg-finland-blue px-6 pt-6 pb-5 text-white relative">
          <button
            type="button"
            aria-label="Close contact options"
            data-ocid="contact_modal.close.button"
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <DialogTitle className="text-xl font-bold text-white font-heading">
                Get in Touch
              </DialogTitle>
            </div>
            <p className="text-white/75 text-sm leading-relaxed">
              Choose how you'd like to reach us — we typically respond within a
              few hours.
            </p>
          </DialogHeader>
        </div>

        {/* Options */}
        <div className="p-5 space-y-3 bg-white">
          {/* Email */}
          <a
            href="mailto:pankaj.kumar@test2deploy.eu"
            data-ocid="contact_modal.email.button"
            aria-label="Send email to pankaj.kumar@test2deploy.eu"
            onClick={onClose}
            className="flex items-center gap-4 w-full p-4 rounded-xl border-2 border-finland-blue-mid bg-finland-off-white hover:border-finland-blue hover:bg-finland-blue-light transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finland-blue"
          >
            <div className="w-11 h-11 rounded-xl bg-finland-blue flex items-center justify-center flex-shrink-0 shadow-finland group-hover:shadow-finland-lg transition-shadow">
              <Mail className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div className="text-left min-w-0">
              <div className="font-semibold text-finland-blue text-sm">
                Send an Email
              </div>
              <div className="text-xs text-gray-500 truncate">
                pankaj.kumar@test2deploy.eu
              </div>
            </div>
            <div
              className="ml-auto text-finland-blue-mid group-hover:text-finland-blue transition-colors"
              aria-hidden="true"
            >
              →
            </div>
          </a>

          {/* Call */}
          <a
            href="tel:+358417280893"
            data-ocid="contact_modal.call.button"
            aria-label="Call us at +358 41 728 0893"
            onClick={onClose}
            className="flex items-center gap-4 w-full p-4 rounded-xl border-2 border-finland-blue-mid bg-finland-off-white hover:border-finland-blue hover:bg-finland-blue-light transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finland-blue"
          >
            <div className="w-11 h-11 rounded-xl bg-finland-blue flex items-center justify-center flex-shrink-0 shadow-finland group-hover:shadow-finland-lg transition-shadow">
              <Phone className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div className="text-left min-w-0">
              <div className="font-semibold text-finland-blue text-sm">
                Call Us
              </div>
              <div className="text-xs text-gray-500">+358 41 728 0893</div>
            </div>
            <div
              className="ml-auto text-finland-blue-mid group-hover:text-finland-blue transition-colors"
              aria-hidden="true"
            >
              →
            </div>
          </a>

          {/* Message form */}
          <button
            type="button"
            data-ocid="contact_modal.message.button"
            aria-label="Send a message via the contact form"
            onClick={handleSendMessage}
            className="flex items-center gap-4 w-full p-4 rounded-xl border-2 border-finland-blue-mid bg-finland-off-white hover:border-finland-blue hover:bg-finland-blue-light transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-finland-blue"
          >
            <div className="w-11 h-11 rounded-xl bg-finland-blue flex items-center justify-center flex-shrink-0 shadow-finland group-hover:shadow-finland-lg transition-shadow">
              <MessageSquare
                className="w-5 h-5 text-white"
                aria-hidden="true"
              />
            </div>
            <div className="text-left min-w-0">
              <div className="font-semibold text-finland-blue text-sm">
                Send a Message
              </div>
              <div className="text-xs text-gray-500">
                Fill out the contact form below
              </div>
            </div>
            <div
              className="ml-auto text-finland-blue-mid group-hover:text-finland-blue transition-colors"
              aria-hidden="true"
            >
              →
            </div>
          </button>
        </div>

        {/* Footer note */}
        <div className="px-5 pb-5 pt-0 bg-white">
          <p className="text-center text-xs text-gray-400">
            🇫🇮 Based in Finland — available Mon–Fri, 9am–5pm EET
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
