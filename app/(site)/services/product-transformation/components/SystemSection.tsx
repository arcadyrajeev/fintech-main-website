import { systemLayers } from "./data";

export default function SystemSection() {
  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Beyond the interface
          </span>
          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Redesigning the interface won&apos;t fix a broken product system.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Product friction often originates deeper than the interface. It
            comes from how information is structured, how workflows connect, and
            how the system responds to real operational needs.
          </p>
          <p className="mt-5 leading-7 text-slate-600">
            We look at the complete product system before changing its
            individual parts. This allows every design and development decision
            to support a larger operational structure.
          </p>
        </div>
        <div className="space-y-4">
          {systemLayers.map((item, index) => (
            <article
              key={item.title}
              className="flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-semibold text-sky-500">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
