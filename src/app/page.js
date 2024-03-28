const url = "https://back-end-ifms-marcelino.vercel.app/campi"

export default async function Home() {

  const resposta = await fetch(url, {
    next: {
      revalidate: 1
    },
    cache: "no-cache",
    method: "GET",
    headers: {'Content-Type':'application/json'}
  });

  const campi = await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campi.map((campus) =>
        <div>
             <p>{campus.nome_campus}</p>
        </div>
      )}
    </main>
  )
}