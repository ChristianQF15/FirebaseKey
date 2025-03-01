export default {
  async fetch(request, env, ctx) {
    const firebaseURL = "https://testapp-8a58f-default-rtdb.firebaseio.com/Credencial.json"; // Cambia 'datos' por tu nodo específico
    
    try {
      const response = await fetch(firebaseURL);
      const data = await response.json();

      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response("Error al obtener datos: " + error.message, { status: 500 });
    }
  },
};
