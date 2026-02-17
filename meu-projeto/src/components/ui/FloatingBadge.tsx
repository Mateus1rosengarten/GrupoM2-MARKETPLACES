interface FloatingBadgeProps {
  icon: React.ElementType;
  text: string;
  className?: string;
}

export function FloatingBadge({
  icon: Icon,
  text,
  className,
}: FloatingBadgeProps) {
  return (
    <div
      className={`
        absolute bg-brand/70 backdrop-blur-md text-background font-inter
        py-2 px-3 sm:p-4 rounded-2xl shadow-xl 
        flex items-center gap-2 sm:gap-3 z-10
        ${className}
      `}
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
