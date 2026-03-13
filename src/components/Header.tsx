import Link from "next/link"

export default function Header() {
  return (
    <header style={{ background: "#111", color: "#fff", padding: "15px" }}>

      <h1>AGM Software</h1>

      <nav>
        <Link href="/">Home</Link> {" "}

      </nav>

    </header>
  )
}
