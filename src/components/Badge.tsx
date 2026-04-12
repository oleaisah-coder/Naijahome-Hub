import type { ReactNode } from 'react';

interface Props {
  label: string;
  variant?: 'emerald' | 'royal' | 'default';
  icon?: ReactNode;
}

export default function Badge({ label, variant = 'default', icon }: Props) {
  const baseClasses = "px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-2";
  
  const variants = {
    emerald: "bg-emerald-500 text-white",
    royal: "bg-royal-500 text-white",
    default: "bg-charcoal-500 text-white"
  };

  return (
    <div className={`${baseClasses} ${variants[variant]}`}>
      {icon} {label}
    </div>
  );
}
