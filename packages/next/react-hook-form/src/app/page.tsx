export default function Home() {
  // TODO:
  // 1. Add react-hook-form
  // 2. Add Zod validation
  // 3. Handle form validations
  // 4. Handle form submission

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-lg font-bold">React Hook Form</h1>
      <form className="grid items-center grid-cols-2 gap-2 p-2 rounded-sm bg-neutral-800 shadow-[0">
        <div>
          <label className="font-semibold text-neutral-600" htmlFor="firstName">
            First Name
          </label>
          <input className="p-2 w-full text-neutral=800 bg-neutral-600" name="firstName" />
        </div>

        <div>
          <label className="font-semibold text-neutral-600" htmlFor="lastName">
            Last Name
          </label>
          <input className="p-2 w-full text-neutral=800 bg-neutral-600" name="lastName" />
        </div>

        <div>
          <label className="font-semibold text-neutral-600" htmlFor="age">
            Age
          </label>
          <input className="p-2 w-full text-neutral=800 bg-neutral-600" name="age" />
        </div>

        <div>
          <label className="font-semibold text-neutral-600" htmlFor="email">
            Email
          </label>
          <input className="p-2 w-full text-neutral=800 bg-neutral-600" name="email" />
        </div>
        <div>
          <label className="font-semibold text-neutral-600" htmlFor="password">
            Email
          </label>
          <input className="p-2 w-full text-neutral=800 bg-neutral-600" name="password" type="password" />
        </div>
        <div>
          <label className="font-semibold text-neutral-600" htmlFor="confirmPassword">
            Email
          </label>
          <input className="p-2 w-full text-neutral=800 bg-neutral-600" name="confirmPassword" type="password" />
        </div>
      </form>
    </div>
  );
}
