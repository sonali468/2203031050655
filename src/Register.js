export async function register() {
  const res = await fetch('http://20.244.56.144/evaluation-service/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: "2203031050655@paruluniversity.ac.in",
      name: "Sonali Chandra",
      mobileNo: "8860710561",
      githubUsername: "sonali468",
      rollNo: "2203031050655",
      collegeName: "Parul University",
      accessCode: "TRzgWM"
    })
  })

  const data = await res.json()
  console.log("Registered")
  console.log("clientID:", data.clientID)
  console.log("clientSecret:", data.clientSecret)
}
