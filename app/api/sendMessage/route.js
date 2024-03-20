export async function POST(request) {
  const { name, phone, email, message, checked } = await request.json();

  const chatId = process.env.CHAT_ID;
  const botToken = process.env.BOT_TOKEN;

  const services = checked.length > 1 ? checked : "not selected";

  // Formated message for Telegram
  const text = `Aipro Agency:%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}%0AServices: ${services}`;

  const requestURL = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;

  const response = await fetch(requestURL);
  const data = await response.json();

  if (!data.ok) return new Response("Error sending!", { status: 500 });
  return new Response(JSON.stringify(data), { status: 201 });
}
