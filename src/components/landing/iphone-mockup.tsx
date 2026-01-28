export function IPhoneMockup() {
  return (
    <div className="relative hidden lg:block">
      <div
        className="relative z-10 aspect-[9/19] w-56 overflow-hidden rounded-[2.5rem] border-[10px] border-navy bg-navy shadow-soft-lg"
        style={{ transform: "rotate(-6deg)" }}
      >
        <div className="absolute left-1/2 top-5 h-6 w-20 -translate-x-1/2 rounded-full bg-navy" />
        <div className="mt-8 h-full overflow-y-auto bg-muted p-4">
          <div className="space-y-3 rounded-2xl bg-white p-4 shadow-soft">
            <div className="h-2 w-[75%] rounded bg-muted" />
            <div className="h-2 w-1/2 rounded bg-muted" />
            <div className="mt-4 h-10 rounded-xl bg-primary/20" />
            <div className="h-10 rounded-xl bg-muted" />
            <div className="h-10 rounded-xl bg-primary" />
          </div>
          <p className="mt-4 text-center text-xs font-medium text-navy">
            Tu plataforma para encontrar ayudas al instante
          </p>
        </div>
      </div>
    </div>
  );
}
