export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-primary mb-2 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-indigo-500 rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 mt-2">{subtitle}</p>
      )}
    </div>
  );
}
