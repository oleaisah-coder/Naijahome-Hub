import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349012949580?text=Hello, I am interested in your properties. Could you please help me find my ideal home?"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
