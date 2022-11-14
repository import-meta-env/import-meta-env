export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">{import.meta.env.HELLO}</div>

      <div>
        <a
          className="font-medium text-zinc-300 hover:text-white"
          href="https://iendeavor.github.io/import-meta-env/"
          target='_blank'
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
