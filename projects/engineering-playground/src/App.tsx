function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-gray-100">
      <header className="border-b border-gray-800 bg-[#0f141b]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Engineering Laboratory
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight">
              ⚙️ Engineering Playground
            </h1>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="text-gray-400">SYSTEM ONLINE</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <section className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-400">
            INTERACTIVE SIMULATION ENVIRONMENT
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Explore Engineering Systems
          </h2>

          <p className="mt-3 max-w-2xl text-gray-400">
            Experiment with circuits, signals, mathematics, control systems,
            networking, and algorithms through interactive simulations.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <SimulationCard
            icon="⚡"
            title="Circuit Lab"
            description="Explore voltage, current, resistance, KVL, KCL, and circuit behavior."
            status="COMING SOON"
          />

          <SimulationCard
            icon="〰️"
            title="Signal Lab"
            description="Generate waveforms and explore frequency-domain behavior."
            status="COMING SOON"
          />

          <SimulationCard
            icon="📐"
            title="Math Lab"
            description="Experiment with engineering mathematics and numerical methods."
            status="COMING SOON"
          />

          <SimulationCard
            icon="🤖"
            title="Control Lab"
            description="Explore feedback systems, sensors, PID control, and system response."
            status="COMING SOON"
          />

          <SimulationCard
            icon="🌐"
            title="Network Lab"
            description="Visualize packets, latency, routing, and network behavior."
            status="COMING SOON"
          />

          <SimulationCard
            icon="🧮"
            title="Algorithm Lab"
            description="Visualize algorithms, data structures, and computational complexity."
            status="COMING SOON"
          />
        </section>
      </main>
    </div>
  )
}

type SimulationCardProps = {
  icon: string
  title: string
  description: string
  status: string
}

function SimulationCard({
  icon,
  title,
  description,
  status,
}: SimulationCardProps) {
  return (
    <article className="group rounded-xl border border-gray-800 bg-[#111820] p-6 transition hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-[#141d27]">
      <div className="flex items-start justify-between">
        <span className="text-3xl">{icon}</span>

        <span className="rounded-full border border-gray-700 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-gray-500">
          {status}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        {description}
      </p>

      <button
        type="button"
        disabled
        className="mt-6 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-500"
      >
        Launch Simulation
      </button>
    </article>
  )
}

export default App