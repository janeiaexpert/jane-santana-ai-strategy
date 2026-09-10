import { useState, type ComponentType, type FormEvent } from "react";
import { Chrome, Circle, Eye, EyeOff, Github, type LucideProps } from "lucide-react";
import { motion } from "motion/react";

const revealContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const revealItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <main className="flex min-h-screen w-full bg-black p-2 text-white selection:bg-white/30 transition-all duration-500 lg:h-screen lg:overflow-hidden lg:p-4">
      <section className="relative hidden h-full w-[52%] flex-col items-center justify-end overflow-hidden rounded-3xl px-12 pb-32 shadow-2xl lg:flex">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline aria-hidden="true">
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4"
            type="video/mp4"
          />
        </video>

        <motion.div
          className="relative z-10 w-full max-w-xs space-y-8 text-center"
          variants={revealContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={revealItem} className="flex items-center justify-center gap-2">
            <Circle className="h-5 w-5 fill-white text-white" aria-hidden="true" />
            <span className="text-xl font-semibold tracking-tight">Aurora</span>
          </motion.div>
          <motion.div variants={revealItem} className="space-y-3">
            <h1 className="whitespace-nowrap text-4xl font-medium tracking-tight">Join Aurora</h1>
            <p className="px-4 text-sm leading-relaxed text-white/60">
              Follow these 3 quick phases to activate your space.
            </p>
          </motion.div>
          <motion.div variants={revealItem} className="space-y-3">
            <StepItem number={1} text="Register your identity" active />
            <StepItem number={2} text="Configure your studio" />
            <StepItem number={3} text="Finalize your profile" />
          </motion.div>
        </motion.div>
      </section>

      <section className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-4 py-12 sm:px-12 sm:py-10 lg:overflow-hidden lg:px-16 lg:py-6 xl:px-24">
        <motion.div
          className="w-full max-w-xl space-y-8 sm:space-y-10 lg:space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <header className="space-y-2">
            <h2 className="text-3xl font-medium tracking-tight">Create New Profile</h2>
            <p className="text-sm text-white/40">Input your basic details to begin the journey.</p>
          </header>

          <div className="grid grid-cols-2 gap-4">
            <SocialButton icon={Chrome} label="Google" />
            <SocialButton icon={Github} label="Github" />
          </div>

          <div className="relative flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/10" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-black px-4 text-xs font-medium uppercase tracking-widest text-white/40">Or</span>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <InputGroup label="First Name" placeholder="Jane" type="text" />
              <InputGroup label="Last Name" placeholder="Doe" type="text" />
            </div>
            <InputGroup label="Email" placeholder="jane@example.com" type="email" />

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-white">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  minLength={8}
                  required
                  className="h-11 w-full rounded-xl border-none bg-brand-gray px-4 pr-12 text-white outline-none placeholder:text-white/20 focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-xl text-white/40 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/30"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-xs text-white/30">Requires at least 8 symbols.</p>
            </div>

            <button
              type="submit"
              className="mt-4 h-14 w-full rounded-xl bg-white font-semibold text-black transition hover:bg-white/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-white/40">
            Member of the team?{" "}
            <a href="/login" className="font-medium text-white transition-opacity hover:opacity-70">Log in</a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}

function StepItem({ number, text, active = false }: { number: number; text: string; active?: boolean }) {
  return (
    <div className={`flex h-14 items-center gap-3 rounded-xl px-4 text-left text-sm font-medium transition-colors ${active ? "border border-white bg-white text-black" : "border-none bg-brand-gray text-white"}`}>
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${active ? "bg-black text-white" : "bg-white/10 text-white/40"}`}>
        {number}
      </span>
      <span>{text}</span>
    </div>
  );
}

function SocialButton({ icon: Icon, label }: { icon: ComponentType<LucideProps>; label: string }) {
  return (
    <button type="button" className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-black text-sm font-medium text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}

function InputGroup({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  const id = label.toLowerCase().replaceAll(" ", "-");
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-white">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        className="h-11 w-full rounded-xl border-none bg-brand-gray px-4 text-white outline-none placeholder:text-white/20 focus:ring-2 focus:ring-white/20"
      />
    </div>
  );
}